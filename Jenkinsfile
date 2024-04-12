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
        
        stage('SonarQube analysis') {
            steps {
                script {
                    scannerHome = tool 'SonarQube'// must match the name of an actual scanner installation directory on your Jenkins build agent
                }
                withSonarQubeEnv('joshs sonarcloud') {
                sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }

        stage('Npm run dev') {
            steps {
                sh 'npm run dev'

            }
        }


    }
}
