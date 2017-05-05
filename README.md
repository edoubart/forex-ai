# Forex AI

![Forex AI Logo](forex-ai-website/img/logo.png)

Forex AI is a foreign exchange rates and currency conversion Slack Chatbot built on top of [Serverless](https://serverless.com/) and [Fixer.io](http://fixer.io/).

## Usage

`@forexai convert 1USD in EUR`

## Components

* The Serverless Framework
* AWS Lambda
* Other AWS Services: S3, CloudWatch, IAM, DynamoDB, CloudFormation, API Gateway, CloudFront (transparent)
* Slack (Application Platform)

## Deployment

`serverless.yml`

* Service
  * Provider: AWS
  * Functions: `install`, `events` & `actions`
  * Resources
* CloudFormation

`sls` command
