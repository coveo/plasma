#!groovy

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.net.URLEncoder;

library(
    identifier: "jenkins-common-lib@v1.6",
    retriever: modernSCM(github(credentialsId: "github-app-dev", repository: "jenkins-common-lib", repoOwner: "coveo")),
    changelog: false
)

library(
    identifier: "jsadmin_pipeline@master",
    retriever: modernSCM(github(credentialsId: "github-app-dev", repository: "jsadmin_pipeline", repoOwner: "coveo")),
    changelog: false
)

pipeline {

  agent { label "build && docker && linux" }

   parameters {
      extendedChoice(
        name: 'LIBRARIES', 
        description: 'Name of the Figma libraries to extract tokens from (leave all unchecked to extract them all)', 
        type: 'PT_CHECKBOX', 
        value: 'Icons', 
        multiSelectDelimiter: ' ', 
        quoteValue: false, 
        saveJSONParameterToFile: false, 
        visibleItemCount: 50
      )
  }

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
          if (params.LIBRARIES.length() > 0) {
            sh "pnpm run tokens:fetch --filter @coveord/plasma-tokens -- --libraries ${params.LIBRARIES}"
          } else {
            sh "pnpm run tokens:fetch --filter @coveord/plasma-tokens"
          }
        }
      }
    }

    stage('Build tokens') {
      steps {
        script {
          sh "pnpm run tokens:build --filter @coveord/plasma-tokens"
        }
      }
    }

    stage('Open pull request') {
      steps {
        script {
          def prBranch = "design-token-extraction"
          def prTitle = "Design tokens extraction"
          def prbody = "This PR was created by the automatic design tokens extraction process, review with caution 🎁"

          sh "git checkout -B ${prBranch}"
          sh "git add ."
          sh "git commit -m \"feat(tokens): extract design tokens from figma libraries\""
          sh "git push -u -f origin ${prBranch}:${prBranch}"

          withCredentials([usernamePassword(credentialsId: 'github-app-dev',
            usernameVariable: 'GITHUB_APP',
            passwordVariable: 'GITHUB_ACCESS_TOKEN')
          ]) {
            runPackage.call(
              "github-create-or-update-pr",
              "--repo=plasma --head=${prBranch} --title=\"${prTitle}\" --body=\"${prbody}\""
            )
          }
        }
      }
    }
  }
}

