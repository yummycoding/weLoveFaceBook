[![Gitter](https://badges.gitter.im/JoinChat.svg)](https://gitter.im/linnovate/mean?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Coverage Status](https://coveralls.io/repos/github/jsdoc2md/jsdoc-to-markdown/badge.svg?branch=master)](https://coveralls.io/github/jsdoc2md/jsdoc-to-markdown?branch=master)
[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)

# WeLoveFacebook （Gatorbook）
Gatorbook is a Facebook-like social network web application built using MEAN stack (MongoDB, Express, Angular 4, Node.js), with nearly ALL features you have on a facebook!

- For users, user guide can be found [here](https://github.com/yummycoding/weLoveFaceBook/wiki/Front-End-Documentation) (You can see what our interface looks like there :) )

- For developers, RESTful API can be found [here](https://github.com/yummycoding/weLoveFaceBook/wiki/REST-API-Documentation)

- To get started and mount Gatorbook on your own computer, please read the following

<img src="https://github.com/yummycoding/weLoveFaceBook/blob/newb/frontend/src/assets/images-home/gator.png" width="300">

**Table of Contents**

- [MEAN Stack Introduction](#mean)
- [Setup Environment and Install Our Code](#installation)
  - [Node v6.11.2](#node-v6.11.2)
  - [NPM global dependencies](#npm-global-dependencies)
  - [MongoDB v3.4.9](#mongodb-v3.4.9)
  - [Source code](#source-code)
- [Mount Our Program](#usage)
- [Licence](#licence)
- [Authors](#authors)
- [Feedback your suggestions](#Feedback)



# MEAN

- [MongoDB](https://www.mongodb.org/) - MongoDB is the leading NoSQL database, empowering businesses to be more agile and scalable
- [Express](http://expressjs.com/) - Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications
- [Angular 4](https://angular.io/) - based framework. -Angular lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop
- [Node.js](http://www.nodejs.org/) - Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications

# Installation

The following instructions are the most common to get the development environment up and running, if you run into issues, check out the [feedback](#Feedback) section and let us know what issues you met.

## Node v6.11.2
You need Node 6.11.2 in your system. Verify if you already have it with `node -v`. If not or different version, you can use Node Version Manager (nvm) to install it.
```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.24.1/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 0.12
nvm use 0.12
```

## NPM global dependencies
```bash
# Nodemon
npm install -g nodemon

# Express
npm install -g express

# Mocha
npm install -g mocha

# Mongoose
npm install -g mongoose

# Supertest
npm install -g supertest

# Cors
npm install -g cors

# jwt
npm install -g jwt

# bcrypt-nodejs
npm install -g bcrypt-nodejs
```

## MongoDB v3.4.9

- Mac: `brew install mongodb 3.4.9`
- Ubuntu: `sudo apt-get -y install mongodb=3.4.9`

## Source code
To install our source code, try
```bash
git clone https://github.com/yummycoding/weLoveFaceBook
cd weLoveFaceBook
npm install
```

## Usage
To mount Gatorbook server and try to use it in your browser:

- In your terminal, key in `mongod`. This will open your database.

- Then change your working directory to folder "frontend", and key in `ng build -w` in your terminal. This will build dist for your front end. 

- At last change your working directory to folder "backend", key in `nodemon server.js`, which use the dist built in step 2, and mount the server on https://localhost:3000.

- Then in your browser, view https://localhost:3000 and you are now able to use our application on your own computer.

   
 
# Feedback
If you have any doubts, questions or ideas for improvement, we'd like to hear from you, clike [here](https://github.com/yummycoding/weLoveFaceBook/issues/new) to give use your feedback!


# License


# Authors
| Name | GitHub ID | Contact Information |
|------|-----------|---------------------|
|You Zhou|ZhouYou528| |
|Junhao Zhang|zjunhao| |
|Zhuoru Li|wobusimanong| |
|Zhenqian Guo|GrandStar & smallGrandstar| |









## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Usage


When do e2e testing 
cd frontend/e2e
ng e2e --no-serve

   - cd backend and then run server: `nodemon`
   - run tests: `npm test`
   - run e2e test:
   - compile assets: `ng build`
