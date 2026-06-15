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
                sh 'curl -X POST "https://api.render.com/deploy/srv-d8ns4smrnols73e4nd2g?key=GZJuKl2z_qc"'
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
