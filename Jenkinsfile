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

    }
}
