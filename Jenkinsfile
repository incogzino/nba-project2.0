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

//         stage('SSH') { 
//             steps {
//                 sshagent (credentials: ['JoshSSHlogin']) {
//                    sh("ssh -o StrictHostKeyChecking=no ubuntu@13.48.195.150 'rm -rf TSINextReactApp && git clone
// https://github.com/incogzino/nba-project2.0.git
// && cd TSINextReactApp && npm ci && sudo npm run dev -- -p 80 -H 0.0.0.0'")
//             }
//         }

        stage('Npm run dev') {
            steps {
                sh 'npm run dev'

            }
        }


    }
}
