pipeline {
    tools {
        nodejs 'NodeJS'
    }
    agent any

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
                stage('Npm run dev') {
            steps {
                sh 'npm run dev'

            }
        }
        stage('SonarQube analysis') {
            steps {
                script {
                    scannerHome = tool '<sonarqubeScannerInstallation>'// must match the name of an actual scanner installation directory on your Jenkins build agent
                }
                withSonarQubeEnv('SonarCloud') {
                sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }

    }
}
