# Installation

1. NPM install
2. NPM start
3. NPM test

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run e2e-test`

Launches Cypress Tests

## Installation with docker

1. docker build -f Dockerfile -t react=GH-search-app .
2. docker run -it -p 4001:3000 react=GH-search-app

# How to use the app

1. Search For User in Github
2. Choose User and get redirected to profile
3. View Profile and get redirected to Github Profile
