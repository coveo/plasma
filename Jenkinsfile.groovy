#!groovy

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.net.URLEncoder;

if (currentBuild.rawBuild.getCauses().toString().contains('BranchIndexingCause')) {
  print "INFO: Build skipped due to trigger being Branch Indexing"
  return
}

library(
    identifier: "jsadmin_pipeline@master",
    retriever: modernSCM(github(credentialsId: "github-app-dev", repository: "jsadmin_pipeline", repoOwner: "coveo")),
    changelog: false
)

library(
    identifier: "jenkins-common-lib@v1.6",
    retriever: modernSCM(github(credentialsId: "github-app-dev", repository: "jenkins-common-lib", repoOwner: "coveo")),
    changelog: false
)

def skipRemainingStages = false

pipeline {

  agent { label "build && docker && linux" }

  environment {
    NPM_TOKEN = credentials("npmjs_com_token")
    GIT = credentials("github-commit-token")
    GH_TOKEN = credentials("github-commit-token")
    SNYK_TOKEN = credentials("snyk_token")
  }

  options {
    ansiColor("xterm")
    timestamps()
    disableConcurrentBuilds()
    timeout(time: 60, unit: 'MINUTES')
  }

  stages {

    stage('Skip') {
      // TODO: remove this once DT-3364 is fixed, set parameter `excludeJenkinsCommit=true` in the webhook instead
      steps {
        script {
          setLastStageName();
          
          commitMessage = sh(returnStdout: true, script: "git log -1 --pretty=%B").trim()
          if(commitMessage.contains("[version bump]")) {
            skipRemainingStages = true
            println "Skipping this build because it was triggered by a version bump."
          } else {
            skipRemainingStages = false
            println "Not a version bump, the build will proceed."
          }
        }
      }
    }

    stage('Prepare') {
      when {
        expression { !skipRemainingStages }
      }

      steps {
        script {
          setLastStageName();

          MASTER_RELEASE_FAILURE_CHANNELS = ["admin-ui-builds", "cloudadmindev"]
          PR_CHANNELS = ["admin-ui-builds"]
          NEW_VERSION = ""
          SCOPE = ""

          sh "mkdir -p ${env.BRANCH_NAME}"
          checkout([
            $class: 'GitSCM',
            branches: scm.branches,
            extensions: scm.extensions + [[$class: "CleanCheckout"]] + [[$class: "LocalBranch", localBranch: "**"]] + [[$class: 'CloneOption', noTags: false, reference: '', shallow: false]],
            userRemoteConfigs: [[credentialsId: "github-app-dev", url: "https://github.com/coveo/react-vapor.git"]]
          ])

          sh "git config --global user.email \"jenkins@coveo.com\""
          sh "git config --global user.name \"Jenkins CI\""
          sh "git remote set-url origin \"https://${env.GIT_USR}:${env.GIT_PSW}@github.com/coveo/react-vapor.git\""

          def nodeHome = tool name: env.BUILD_NODE_VERSION, type: "nodejs"
          env.PATH = "${nodeHome}/bin:${env.PATH}"
          sh "npm config set //registry.npmjs.org/:_authToken=${env.NPM_TOKEN}"

          sh "npm cache clean --force"
          sh "rm -rf node_modules"
          sh "npm install -g pnpm"
          sh "pnpm install"
        }
      }
    }

    stage('Build') {
      when {
        expression { !skipRemainingStages }
      }

      steps {
        script {
          setLastStageName();
          sh "pnpm build"
        }
      }

      post {
        failure {
          postCommentOnGithub();
        }
      }
    }

    stage('Test') {
      when {
        expression { !skipRemainingStages }
      }

      steps {
        script {
          setLastStageName();
          sh "pnpm test:ci"
          sh "pnpm -r report-coverage"
        }
      }

      post {
        failure {
          postCommentOnGithub();
        }
      }
    }

    stage('Deploy PR demo') {
      when {
        allOf {
          not {
            expression {
              env.BRANCH_NAME ==~ /(master|release-.*)/
            }
          }
          expression { !skipRemainingStages }
        }
      }

      steps {
        script {
          setLastStageName();
          withAWS(roleAccount: '043612128888', role: 'nrd-jsadmin-s3-role', useNode: true) {
            sh "bash ./build/deploy-demo.sh ${env.BRANCH_NAME}"
          }

          def SOURCE_LINK = ""
          def pullRequestURL = getCommitPullRequestURL()
          if (pullRequestURL != "") {
            postCommentOnGithub("https://vapor.coveo.com/feature/${env.BRANCH_NAME}/index.html");
            SOURCE_LINK = pullRequestURL
          } else {
            SOURCE_LINK = "https://github.com/coveo/react-vapor/tree/${env.BRANCH_NAME}"
          }

          def message = "Build succeeded for <${SOURCE_LINK}|${env.BRANCH_NAME}>: https://vapor.coveo.com/feature/${env.BRANCH_NAME}/index.html"
          notify.sendSlackWithThread(
              color: "#00FF00", message: message,
              ["admin-ui-builds"]
          )
        }
      }

      post {
        failure {
          script {
            postCommentOnGithub();
          }
        }
      }
    }

    stage('Novelty check') {
      when {
        allOf {
          expression { !skipRemainingStages }
          expression { env.BRANCH_NAME ==~ /(master|next|release-.*)/ }
        }
      }
      steps {
        script {
          setLastStageName();
          sh "git fetch origin ${env.BRANCH_NAME}"
          REMOTE = "origin/" + env.BRANCH_NAME

          COMMITS_BEHIND = sh(
            script: "git rev-list --count \"$REMOTE...${env.BRANCH_NAME}\"",
            returnStdout: true
          ).trim().toInteger()

          if (COMMITS_BEHIND > 0) {
            skipRemainingStages = true
            println "Skipping deployment since remote changed (something was merged)"
          } 
        }
      }
    }

    stage('Publish') {
      when {
        allOf {
          expression { !skipRemainingStages }
          expression { env.BRANCH_NAME ==~ /(master|next|release-.*)/ }
        }
      }
      steps {
        script {
          setLastStageName();
          sh "git fetch --tags origin ${env.BRANCH_NAME}"

          if (env.BRANCH_NAME ==~ /release-.*/) {
            // release
            sh "npx lerna publish patch \
            --create-release github \
            --no-commit-hooks \
            --force-publish \
            --no-push \
            --no-git-reset \
            --yes"
          } else if (env.BRANCH_NAME == "next") {
            // next
            sh "npx lerna publish \
            --conventional-commits \
            --create-release github \
            --conventional-prerelease \
            --preid next \
            --dist-tag next \
            --no-commit-hooks \
            --force-publish \
            --no-push \
            --no-git-reset \
            --yes"
          } else {
            // master
            sh "npx lerna publish \
            --conventional-commits \
            --create-release github \
            --no-commit-hooks \
            --force-publish \
            --no-push \
            --no-git-reset \
            --yes"
          }

          NEW_VERSION = sh(
            script: "node -p -e 'require(`./lerna.json`).version;'",
            returnStdout: true
          ).trim()

          sh "git tag -d v${NEW_VERSION}" // delete tag created by lerna publish
          sh "pnpm install --lockfile-only"
          sh "git add pnpm-lock.yaml"
          sh "git commit --amend --no-edit"
          sh "git tag -a -m \"v${NEW_VERSION}\" v${NEW_VERSION}" // create new tag on the amended commit
          sh "git push -u origin ${env.BRANCH_NAME} --follow-tags --force" // push everything along with new tag
          sh "git reset --hard"
        }
      }
    }

    stage('Snyk') {
      when {
        allOf {
          expression { !skipRemainingStages }
          expression { env.BRANCH_NAME ==~ /(master|release-.*)/ }
        }
      }
      steps {
        script {
          setLastStageName();
          sh "mkdir -p snyk"
            
          convertPNPMLockToNPM("../pnpm-lock.yaml", "../snyk");
            
          dir('snyk') {
            sh "npx snyk auth $SNYK_TOKEN"
            sh "npx snyk test --org=coveo-admin-ui --file=package-lock.json --strict-out-of-sync=false --json > ../snyk-result.json || true"
            sh "npx snyk monitor --org=coveo-admin-ui --file=package-lock.json --strict-out-of-sync=false --json > ../snyk-monitor-result.json || true"
          }

          archiveArtifacts artifacts: 'snyk-result.json,snyk-monitor-result.json'

          // To avoid failure when the cache is not cleared between builds
          sh "rm -rf ./snyk"
        }
      }
    }

    stage('Veracode') {
      when {
        allOf {
          expression { !skipRemainingStages }
          expression { env.BRANCH_NAME ==~ /(master|release-.*)/ }
        }
      }

      steps {
        script {
          setLastStageName();
          sh "mkdir -p veracode"
          sh "mkdir -p veracode/demo"
          sh "mkdir -p veracode/react-vapor"

          // copy all ts and tsx files
          sh "rsync -arvR ./packages/demo/src/**/*.ts* ./veracode/demo/"
          sh "rsync -arvR ./packages/react-vapor/src/**/*.ts* ./veracode/react-vapor/"

          dir('veracode') {
            // remove spec and mock files
            sh "find . -name '*.spec.*' -delete"
            sh "find . -name '*.mock.*' -delete"
          }
        }
      }
    }

    stage('Deployment pipeline') {
      when {
        allOf {
          expression { !skipRemainingStages }
          expression { env.BRANCH_NAME ==~ /(master|release-.*)/ }
        }
      }

      steps {
        script {
          setLastStageName();
          
          deploymentPackage.command(command: "package create --version ${NEW_VERSION} --resolve VERSION=${NEW_VERSION} --with-deploy")
        }
      }
    }
  }

  post {
    fixed {
      script {
        if(!skipRemainingStages && env.BRANCH_NAME ==~ /(master|release-.*)/){
          def message = "Build is back to normal for <${env.BUILD_URL}|${env.JOB_NAME}>";
          def color = "#2ECC71"; // green
          notify.sendSlackWithThread(
            color: color, message: message,
            MASTER_RELEASE_FAILURE_CHANNELS
          )
        }
      }
    }
    failure {
      script {
        def color = "#FF0000";
        def commits = getBuildChangeSets()
        def messageMasterBuild = "Build FAILED at stage *${getLastStageName()}* - ${env.JOB_NAME} (<${env.BUILD_URL}|#${env.BUILD_NUMBER}>)\n" +
          "Last commits:\n ${commits}";
        def messagePrBuild = "Build FAILED at stage *${getLastStageName()}* - ${env.JOB_NAME} (<${env.BUILD_URL}|#${env.BUILD_NUMBER}>)";

        if(env.BRANCH_NAME ==~ /(master|release-.*)/){
          notify.sendSlackWithThread(
            color: color, message: messageMasterBuild,
            MASTER_RELEASE_FAILURE_CHANNELS
          )
        } else {
          notify.sendSlackWithThread(
            color: color, message: messagePrBuild,
            PR_CHANNELS
          )
        }
      }
    }
    always {
      script {
        deleteDir()
      }
    }
  }
}

@NonCPS 
def getBuildChangeSets() {
    MAX_MSG_LEN = 100
    def changeString = ""

    echo "Gathering commits info from current build"
    def changeLogSets = currentBuild.rawBuild.changeSets
    for (int i = 0; i < changeLogSets.size(); i++) {
        def entries = changeLogSets[i].items
        for (int j = 0; j < entries.length; j++) {
            def entry = entries[j]
            truncated_msg = entry.msg.take(MAX_MSG_LEN)
            changeString += "- ${truncated_msg} [${entry.author}]\n"
        }
    }

    if (!changeString) {
        changeString = " - No new changes"
    }
    return changeString
}

void setLastStageName() {
  script {
    LAST_STAGE_NAME = env.STAGE_NAME
  }
}

def getLastStageName() {
  def stage = env.STAGE_NAME
  try {
    stage = LAST_STAGE_NAME
  } catch (e) {}
  return stage
}

def postCommentOnGithub(demoLink="") {
  withCredentials([usernamePassword(credentialsId: 'github-app-dev',
    usernameVariable: 'GITHUB_APP',
    passwordVariable: 'GITHUB_ACCESS_TOKEN')
  ]) {
    runPackage.call(
      "github-comment",
      "--demoLink=${demoLink} --commitHash=${env.GIT_COMMIT} --repo=react-vapor"
    )
  }
}

def getCommitPullRequestURL() {
  withCredentials([usernamePassword(credentialsId: 'github-app-dev',
    usernameVariable: 'GITHUB_APP',
    passwordVariable: 'GITHUB_ACCESS_TOKEN')
  ]) {
    return runPackage.call(
      "github-commit-pr-url",
      "--commitHash=${env.GIT_COMMIT} --repo=react-vapor"
    )
  }
}

def convertPNPMLockToNPM(pnpmLockPath="", npmLockPath="") {
  runUnzipPackage.call("convert-pnpm-lock-to-npm", "${pnpmLockPath} ${npmLockPath}")
}
