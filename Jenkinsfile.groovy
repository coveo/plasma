#!groovy

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.net.URLEncoder;

if (currentBuild.rawBuild.getCauses().toString().contains('BranchIndexingCause')) {
  print "INFO: Build skipped due to trigger being Branch Indexing"
  return
}

library identifier: 'jsadmin_pipeline@next', retriever: modernSCM([
 $class: 'GitSCMSource',
 remote: 'git@bitbucket.org:coveord/jsadmin_pipeline.git',
 credentialsId: 'coveo-bitbucket-rd-ssh'
])

library identifier: 'deploy_pipeline@v1.5', retriever: modernSCM([
$class: 'GitSCMSource',
remote: 'git@bitbucket.org:coveord/deploy_pipeline.git',
credentialsId: 'coveo-bitbucket-rd-ssh'
])

def skipRemainingStages = false

pipeline {

  agent { label "build && docker && linux" }

  environment {
    NPM_TOKEN = credentials("npmjs_com_token")
    GIT = credentials("github-coveobot")
    GH_TOKEN = credentials("github-coveobot_token")
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
          sh "npm run setup"

          runSnyk(
            org: "coveo-admin-ui",
            directory: "./packages",
            image: "snyk/snyk-cli:npm",
            archiveArtifacts: true,
            scanDevDependencies: false,
            dockerVariableMap: ["NODE_OPTIONS": env.NODE_OPTIONS],
            additionalParameters: "--all-projects --prune-repeated-subdependencies"
          )

          if (env.BRANCH_NAME ==~ /(master|release-.*)/) {
            sh "git fetch --tags origin ${env.BRANCH_NAME}"

            if (env.BRANCH_NAME ==~ /release-.*/) {
              sh "npx lerna version patch --no-commit-hooks --no-git-tag-version --no-push --force-publish --yes"
            } else {
              sh "npx lerna version --no-commit-hooks --no-git-tag-version --no-push --force-publish=\"react-vapor\" --yes"
            }
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
          sh "npm run build"
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
          sh "npm run test"
          sh "npx lerna run report-coverage"
        }
      }
    }

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
            sh "node ./build/add-comment.js"

            def message = "Build succeeded: https://vaporqa.cloud.coveo.com/feature/${env.CHANGE_BRANCH}/index.html"
            notify.sendSlackWithThread(
                color: "#00FF00", message: message,
                ["admin-ui-builds"]
            )
          }
        }
      }
    }

    stage('Publish') {
      when {
        allOf {
          expression { env.BRANCH_NAME ==~ /(master|release-.*)/ }
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
              sh "npx lerna publish patch --create-release github --yes --force-publish"
            } else {
              sh "npx lerna publish --create-release github --yes --force-publish=\"react-vapor\""
            }
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
          expression { env.BRANCH_NAME ==~ /(master|release-.*)/ }
          expression { COMMITS_BEHIND == 0 }
        }
      }

      steps {
        script {
          setLastStageName();

          runSnyk(
            org: "coveo-admin-ui",
            directory: ".",
            archiveArtifacts: true,
            scanDevDependencies: false,
            dockerVariableMap: ["NODE_OPTIONS": env.NODE_OPTIONS],
            additionalParameters: "--all-projects --prune-repeated-subdependencies"
          )

          // Prepare veracode
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

          NEW_VERSION = sh(
            script: "node -p -e 'require(`./lerna.json`).version;'",
            returnStdout: true
          ).trim()
          deploymentPackage.command(command: "package create --version ${NEW_VERSION} --resolve VERSION=${NEW_VERSION} --with-deploy")
        }
      }
    }

  }

  post {
    failure {
      script {
        def color = "FF0000";
        def message = "Build FAILED at stage *${getLastStageName()}* - ${env.JOB_NAME} (<${env.BUILD_URL}|#${env.BUILD_NUMBER}>)";

        notify.sendSlackWithThread(
            color: color, message: message,
            ["admin-ui-builds"]
        )
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