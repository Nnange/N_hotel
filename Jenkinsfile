pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Your NodeJS configuration
        maven "Maven"   // Your Maven configuration
    }

    environment {
        FRONTEND_DIR = 'FE_nnangeHotel'
        BACKEND_DIR = 'nnangeHotel'
        // DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials') // DockerHub credentials if you plan to push images
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Nnange/N_hotel.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir(FRONTEND_DIR) {
                    sh 'npm install'
                    // sh 'npm run test'  // Jest testing
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir(BACKEND_DIR) {
                    sh 'mvn clean test'  // JUnit testing
                    sh 'mvn package'
                }
            }
        }

        stage('Docker Build and Push') {
            steps {
                script {
                    // Build and tag Docker images
                    sh 'docker-compose build'
                    sh 'docker-compose up -d'  // Deploy on home server
                }
            }
        }
    }

    post {
        always {
            cleanWs() // Clean workspace after build
        }
    }
}
