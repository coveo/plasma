#!groovy

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.net.URLEncoder;

library(
    identifier: "jenkins-common-lib@v1.6",
    retriever: modernSCM(github(credentialsId: "github-app-dev", repository: "jenkins-common-lib", repoOwner: "coveo")),
    changelog: false
)

pipeline {

  agent { label "build && docker && linux" }

  environment {
    NPM_TOKEN = credentials("npmjs_com_token")
    GIT = credentials("github-commit-token")
    GH_TOKEN = credentials("github-commit-token")
    FIGMA_TOKEN = credentials("adminui-read-only-figma-token")
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
          sh "mkdir -p ${env.BRANCH_NAME}"
          checkout([
            $class: 'GitSCM',
            branches: scm.branches,
            extensions: scm.extensions + [[$class: "CleanCheckout"]] + [[$class: "LocalBranch", localBranch: "**"]] + [[$class: 'CloneOption', noTags: false, reference: '', shallow: false]],
            userRemoteConfigs: [[credentialsId: "github-app-dev", url: "https://github.com/coveo/plasma.git"]]
          ])

          sh "git config --global user.email \"jenkins@coveo.com\""
          sh "git config --global user.name \"Jenkins CI\""
          sh "git remote set-url origin \"https://${env.GIT_USR}:${env.GIT_PSW}@github.com/coveo/plasma.git\""

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

    stage('Fetch tokens') {
      steps {
        script {
          sh "pnpm run tokens:fetch --filter @coveord/plasma-tokens"
        }
      }
    }

    stage('Build tokens') {
      steps {
        script {
          sh "pnpm run tokens:build --filter @coveord/plasma-tokens"
          sh "git status"
        }
      }
    }

    stage('Open pull request') {
      steps {
        script {
          echo "PR creation not implemented yet (will be done in UITOOL-238)."
        }
      }
    }
  }
}

