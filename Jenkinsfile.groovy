#!groovy

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.net.URLEncoder;

if (currentBuild.rawBuild.getCauses().toString().contains('BranchIndexingCause')) {
  print "INFO: Build skipped due to trigger being Branch Indexing"
  return
}

library(
    // identifier: "jsadmin_pipeline@master",
    identifier: "jsadmin_pipeline@ADUI-6927/script-convert-pnpm-to-npm-lockfile",
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
    GIT = credentials("github-coveobot")
    GH_TOKEN = credentials("github-coveobot_token")
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
          
          MASTER_RELEASE_FAILURE_CHANNELS = ["admin-ui-builds", "cloudadmindev", "admin-ui-guild"]
          PR_CHANNELS = ["admin-ui-builds"]
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

          NEW_VERSION = ""
          SCOPE = ""

          sh "mkdir -p ${env.BRANCH_NAME}"
          checkout([
            $class: 'GitSCM',
            branches: scm.branches,
            extensions: scm.extensions + [[$class: "CleanCheckout"]] + [[$class: "LocalBranch", localBranch: "**"]] + [[$class: 'CloneOption', noTags: false, reference: '', shallow: false]],
            userRemoteConfigs: [[credentialsId: "github-coveobot", url: "https://github.com/coveo/react-vapor.git"]]
          ])

          sh "git config --global user.email \"jenkins@coveo.com\""
          sh "git config --global user.name \"Jenkins CI\""
          sh "git remote set-url origin \"https://${env.GIT_USR}:${env.GH_TOKEN}@github.com/coveo/react-vapor.git\""

          def nodeHome = tool name: env.BUILD_NODE_VERSION, type: "nodejs"
          env.PATH = "${nodeHome}/bin:${env.PATH}"
          sh "npm config set //registry.npmjs.org/:_authToken=${env.NPM_TOKEN}"

          sh "npm cache clean --force"
          sh "rm -rf node_modules"
          sh "npm install -g pnpm"
          sh "pnpm install"

          if (env.BRANCH_NAME ==~ /(master|next|release-.*)/) {
            sh "git fetch --tags origin ${env.BRANCH_NAME}"

            if (env.BRANCH_NAME ==~ /release-.*/) {
              sh "npx lerna version patch --no-commit-hooks --no-git-tag-version --no-push --force-publish --yes"
            } else if (env.BRANCH_NAME == "next") {
              sh "npx lerna version --conventional-prerelease --preid next --no-commit-hooks --no-git-tag-version --no-push --force-publish --yes"
            } else {
              sh "npx lerna version --no-commit-hooks --no-git-tag-version --no-push --force-publish=\"react-vapor\" --yes"
            }
            env.NEW_VERSION = sh(
              script: "node -p -e 'require(`./packages/react-vapor/package.json`).version;'",
              returnStdout: true
            ).trim()

            sh "git reset --hard"
          }
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

    // // stage('Test') {
    // //   when {
    // //     expression { !skipRemainingStages }
    // //   }

    // //   steps {
    // //     script {
    // //       setLastStageName();
    // //       sh "pnpm test"
    // //       sh "pnpm -r report-coverage"
    // //     }
    // //   }

    // //   post {
    // //     failure {
    // //       postCommentOnGithub();
    // //     }
    // //   }
    // // }

    stage('Deploy in S3') {
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
          withCredentials([[
            $class: 'AmazonWebServicesCredentialsBinding',
            credentialsId: 'aws_coveodev_rw_binaries_key',
            accessKeyVariable: 'AWS_ACCESS_KEY_ID',
            secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
          ]]) {

            
            sh "bash ./build/deploy-demo.sh ${env.CHANGE_BRANCH}"

            if (env.BRANCH_NAME != "next") {
              postCommentOnGithub("https://vaporqa.cloud.coveo.com/feature/${env.CHANGE_BRANCH}/index.html");
            }

            def message = "Build succeeded for <https://github.com/coveo/react-vapor/pull/${env.CHANGE_ID}|${env.BRANCH_NAME}>: https://vaporqa.cloud.coveo.com/feature/${env.CHANGE_BRANCH}/index.html"
            notify.sendSlackWithThread(
                color: "#00FF00", message: message,
                ["admin-ui-builds"]
            )
          }
        }
      }

      post {
        failure {
          script {
            if (env.BRANCH_NAME != "next") {
              postCommentOnGithub();
            }
          }
        }
      }
    }

    stage('Publish') {
      when {
        allOf {
          expression { env.BRANCH_NAME ==~ /(master|next|release-.*)/ }
          expression { !skipRemainingStages }
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

          if (COMMITS_BEHIND == 0) {
            STARTED_BY_USER = cause.user()
            STARTED_BY_UPSTREAM = cause.upstream()

            if (env.BRANCH_NAME ==~ /release-.*/) {
              sh "npx lerna publish patch --create-release github --yes --force-publish --no-push"
            } else if (env.BRANCH_NAME == "next") {
              sh "npx lerna publish --conventional-prerelease --preid next --dist-tag next --create-release github --yes --force-publish=\"react-vapor\" --no-push"
            } else {
              sh "npx lerna publish --create-release github --yes --force-publish=\"react-vapor\" --no-push"
            }
            sh "pnpm install --lockfile-only"
            sh "git add pnpm-lock.yaml"
            sh "git commit -m \"chore(release): [version bump]\""
            sh "git push -u origin master"
          } else {
            sh "echo \"skipping publish since remote changed (something was merged)\""
          }
        }
      }
    }

    stage('Deployment pipeline') {
      when {
        allOf {
          expression { !skipRemainingStages }
          // expression { env.BRANCH_NAME ==~ /(master|release-.*)/ }
          // expression { COMMITS_BEHIND == 0 }
        }
      }

      steps {
        script {
          setLastStageName();

          convertPNPMLockToNPMLock("./pnpm-lock.yaml", "./package-lock.json");
          
          sh "npx snyk auth $SNYK_TOKEN"
          sh "npx snyk test packages/*/ --org=coveo-admin-ui --file=package-lock.json --strict-out-of-sync=false --json > snyk-result.json || true"
          sh "npx snyk monitor packages/*/ --org=coveo-admin-ui --file=package-lock.json --strict-out-of-sync=false --json > snyk-monitor-result.json || true"
          archiveArtifacts artifacts: 'snyk-result.json,snyk-monitor-result.json'

          // // Prepare veracode
          // sh "mkdir -p veracode"
          // sh "mkdir -p veracode/demo"
          // sh "mkdir -p veracode/react-vapor"

          // // copy all ts and tsx files
          // sh "rsync -arvR ./packages/demo/src/**/*.ts* ./veracode/demo/"
          // sh "rsync -arvR ./packages/react-vapor/src/**/*.ts* ./veracode/react-vapor/"

          // dir('veracode') {
          //   // remove spec and mock files
          //   sh "find . -name '*.spec.*' -delete"
          //   sh "find . -name '*.mock.*' -delete"
          // }

          // NEW_VERSION = sh(
          //   script: "node -p -e 'require(`./lerna.json`).version;'",
          //   returnStdout: true
          // ).trim()
          // deploymentPackage.command(command: "package create --version ${NEW_VERSION} --resolve VERSION=${NEW_VERSION} --with-deploy")
        }
      }
    }

  }

  post {
    failure {
      script {
        def color = "FF0000";
        def message = "Build FAILED at stage *${getLastStageName()}* - ${env.JOB_NAME} (<${env.BUILD_URL}|#${env.BUILD_NUMBER}>)";

        if(env.BRANCH_NAME ==~ /(master|release-.*)/){
          notify.sendSlackWithThread(
            color: color, message: message,
            MASTER_RELEASE_FAILURE_CHANNELS
          )
        } else {
          notify.sendSlackWithThread(
            color: color, message: message,
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
    runPackage.call(
      "github-comment",
      "--demoLink=${demoLink} --prNumber=${env.CHANGE_ID} --githubToken=${env.GH_TOKEN} --repositoryName=react-vapor"
    )
}

def convertPNPMLockToNPMLock(pnpmLockPath="", npmLockPath="") {
  runPatate.call("convertPNPMLockToNPM", "--pnpmLockPath=${pnpmLockPath} --npmLockPath=${npmLockPath}")
}