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

pipeline {

  agent { label "build && docker && linux" }

  environment {
    GIT = credentials("github-coveobot")
    NPM_TOKEN = credentials("npmjs_com_token")
  }

  options {
    ansiColor("xterm")
    timestamps()
    disableConcurrentBuilds()
    timeout(time: 60, unit: 'MINUTES')
  }

  stages {

    stage('Prepare') {
      steps {
        script {
          setLastStageName();

          sh "env | sort"

          NEW_VERSION = ""
          SCOPE = ""

          sh "mkdir -p ${env.BRANCH_NAME}"
          checkout([
            $class: 'GitSCM',
            branches: scm.branches,
            extensions: scm.extensions + [[$class: "CleanCheckout"]] + [[$class: "LocalBranch", localBranch: "**"]] + [[$class: 'CloneOption', noTags: false, reference: '', shallow: false]],
            userRemoteConfigs: [[credentialsId: "73157", url: "https://github.com/coveo/react-vapor.git"]]
          ])

          sh "git config --global user.email \"jenkins@coveo.com\""
          sh "git config --global user.name \"Jenkins CI\""
          sh "git remote set-url origin \"https://${env.GIT_USR}:${env.GIT_PSW}@github.com/coveo/react-vapor.git\""

          def nodeHome = tool name: env.BUILD_NODE_VERSION, type: "nodejs"
          env.PATH = "${nodeHome}/bin:${env.PATH}"
          sh "npm config set //registry.npmjs.org/:_authToken=${env.NPM_TOKEN}"
          sh "npm config set package-lock false"

          sh "npm cache clean --force"
          sh "rm -rf node_modules"
          sh "npm run setup"

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
      steps {
        script {
          setLastStageName();
          sh "npm run build"
        }
      }
    }

    stage('Test') {
      steps {
        script {
          setLastStageName();
          sh "npm run test"
          sh "lerna run report-coverage"
        }
      }
    }

    stage('Deploy in S3') {
      when {
        not {
          expression {
            env.BRANCH_NAME ==~ /(master|release-.*)/
          }
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
            sh "mkdir -p packages/vapor/deploy/${env.CHANGE_BRANCH}"
            sh "cp -a packages/vapor/dist/. packages/vapor/deploy/${env.CHANGE_BRANCH}"
            sh "node ./create-live-demo.js"
            sh "node ./invalidate-cloudfront.js"

            notify.buildDemoSucceeded("react-vapor")
          }
        }
      }
    }

    stage('Publish') {
      when {
        allOf {
          expression { env.BRANCH_NAME ==~ /(master|release-.*)/ }
          expression { params.SKIP_PUBLISH == false }
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
              sh "npx lerna publish patch --yes --force-publish"
            } else if (!!STARTED_BY_USER || !!STARTED_BY_UPSTREAM) {
              sh "npx lerna publish --yes --force-publish=\"react-vapor\""
            } else {
              sh "npx lerna publish --yes"
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
          expression { env.BRANCH_NAME ==~ /(master|release-.*)/ }
          expression { params.SKIP_PUBLISH == false }
          expression { COMMITS_BEHIND == 0 }
        }
      }

      steps {
        script {
          setLastStageName();

          // run snyk?
          // run veracode?

          // run deployment_pipeline
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
