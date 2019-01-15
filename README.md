# lemon-python-api
AWS Lambda Serverless example with Python3



## Installation

see: [flask-python-rest-api](https://serverless.com/blog/flask-python-rest-api-serverless-lambda-dynamodb/)

```bash
$ npm init -f
$ npm install --save-dev serverless-wsgi serverless-python-requirements

# Python3의 경우 (if required for MAC OS)
$ pip3 install virtualenv virtualenvwrapper

# Activate VirtualEnv as python3
$ virtualenv venv --python=python3
$ source venv/bin/activate
$ py -V
Python 3.6.5
$ pip -V
pip 18.1

# module설처하고, 반드시 requirements에 추가해줘야 함!!!
(venv) $ pip install flask
(venv) $ pip freeze > requirements.txt
```

## Running

```bash
# script로 실행하기. (sls wsgi 으로 실행함!) - for dev.
$ npm run server-local
```