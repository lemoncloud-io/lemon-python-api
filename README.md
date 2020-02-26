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

# 필요한 모듈 설치하기.
(venv3) $ pip install -r requirements.txt

# NOTE - 모듈 추가시 requirements에 업데이트하기.
(venv) $ pip freeze > requirements.txt
```

## Running

```bash
# script로 실행하기. (sls wsgi 으로 실행함!) - for dev.
$ npm run server-local
```



# TODO

- load keys: https://serverless.com/blog/serverless-secrets-api-keys/
- use tensorflow : https://serverless.com/blog/using-tensorflow-serverless-framework-deep-learning-image-recognition/
