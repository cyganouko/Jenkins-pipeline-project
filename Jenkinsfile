pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
    post {
        failure {
            mail to: 'kegoyacygam@gmail.com',
                 subject: "Build Failed - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Tests failed! Check Jenkins for details."
        }
    }
}
