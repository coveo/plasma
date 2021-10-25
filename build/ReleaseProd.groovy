#!groovy
// Run only if certifiers are all green (veracode, snyk, etc)

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
    stage('Prepare') {
      steps {
        script {
          def commitHash = params.packageName.substring(params.packageName.lastIndexOf('/') + 1)

          checkout([
            $class: 'GitSCM',
            branches: [[name: commitHash ]],
            extensions: [],
            userRemoteConfigs: [[credentialsId: "github-coveobot", url: "https://github.com/coveo/react-vapor.git"]]
          ])

          sh "npm config set //registry.npmjs.org/:_authToken=${env.NPM_TOKEN}"
          sh "rm -rf node_modules"
          sh "npm install -g pnpm"
          sh "pnpm install"
        }
      }
    }
    stage('Update NPM latest') {
      steps {
        script {
          // Publishes packages tagged in the current commit
          sh "lerna publish from-git"
        }
      }
    }
  }
}