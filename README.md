# CI/CD Pipeline using Jenkins and GitHub

This project demonstrates a complete CI/CD pipeline setup using Jenkins and GitHub.

## Prerequisites

- GitHub account and repository
- Jenkins installed and running
- Node.js installed on the Jenkins server

## Setup Instructions

### 1. GitHub Repository Setup
- Create a new repository on GitHub
- Clone this repository locally
- Push the code to GitHub

### 2. Jenkins Setup
- Download Jenkins for Windows from https://www.jenkins.io/download/
- Run the installer and follow the setup wizard
- Start Jenkins service
- Access Jenkins at http://localhost:8080
- Complete the initial setup and install suggested plugins
- Install additional plugins: GitHub Integration, NodeJS Plugin

### 3. Jenkins Configuration
- Go to Manage Jenkins > Global Tool Configuration
- Add NodeJS installation (name it 'NodeJS')
- Create a new item > Pipeline
- In Pipeline section, select "Pipeline script from SCM"
- SCM: Git, Repository URL: your GitHub repo URL
- Script Path: Jenkinsfile
- Save

### 4. GitHub Webhook Setup (Optional for automatic triggers)
- In GitHub repo > Settings > Webhooks
- Add webhook: Payload URL: http://your-jenkins-url/github-webhook/
- Content type: application/json
- Events: Just the push event
- In Jenkins job, check "GitHub hook trigger for GITScm polling"

### 4. Pipeline Stages
The Jenkinsfile defines the following stages:
- Checkout: Pull code from GitHub
- Install Dependencies: Install npm packages
- Build: Build the application
- Test: Run tests
- Deploy: Deploy the application

## Running the Pipeline

1. Push changes to the GitHub repository
2. Jenkins will automatically trigger the pipeline
3. Monitor the build status in Jenkins

## Files
- `Jenkinsfile`: Pipeline definition
- `package.json`: Node.js dependencies
- `app.js`: Sample application
- `test.js`: Sample tests