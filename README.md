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

1. Incase you need to change color or turn the bulb ON/OFF ,double Click on the bulb
2. If you need to change size,use the input text inside the circle and press Enter
3. you will notice the bulb is not working,by not flickering
