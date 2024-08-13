pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yugannkt/Website.git'
            }
        }
        stage('Deploy to Apache') {
            steps {
                script {
                    sh 'sudo systemctl start apache2'
                    sh 'sudo rm -rf /var/www/html/*'
                    sh 'sudo cp -r * /var/www/html/'
                    sh 'sudo chown -R www-data:www-data /var/www/html/*'
                    sh 'sudo chmod -R 755 /var/www/html/*'
                    sh 'sudo systemctl restart apache2'
                }
            }
        }
    }
    
}