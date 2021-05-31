# Pithy-Path 


<!-- ABOUT THE PROJECT -->
## About The Project

This a demonstration and tutorial project of MEAN (Mongo, Express, Angular, Node.js) application. The application has the following simple function

* User enters a URL
* returns a shorted URL
* Pressing copy puts the shortened URL in the clipboard 
* A list of previous shorted URLs is listed

As this is purely education and proof of concepts, it uses Docker Containers configured to allow for continuous development using container. See Docker for more details. 

### Built With

* [Angular](https://angular.io/)
* [NPM](https://www.npmjs.com/get-npm)
* [MongDb](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Docker](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)

## Getting Started

### Pre-Requisites
Most of the framework and applications are installed during the build process but you will need to have the following already installed :-
* Docker
* Node LTS 14

Depending on your OS install the latest versions before continuing 


### Build and run

The application will build and run with the following steps 

1. Close this repository into onto your computer
2. in the **pithy-path** base directory run `docker-compose up`
3. Once the initial build has completed open in [`http://localhost:4200`](`http://localhost:4200`)

## Docker
The following describes the docker files included in the repo and the steps used to create the docker and how to run the docker.

### Docker setup
**docker-compose.yaml**
* builds and runs the angular app using the development server (default port 4200)
* builds and runs the node app (default port 3000)
* download and runs the mongo image (default port )

## Start and stopping
To start the server `docker-compose up` in interactive mode or `docker-compose up -d` to run it the background.
To Stop the server `Ctrl-C` in interactive mode or `docker-compose down` 

Note the docker containers use volumes to the local directories. This allows you to make changes to the code without having to manually restart the server or rebuild 


## Testing the APIs
To run the suite of tests to make sure that the server APIs and the database are connected and functioning correctly. stop the server and running this Docker compose
`docker-compose -f docker-compose-test.yaml up`

This will perform the following

* Loads the mongoDb
* loads the node-app iwiht `npm test`
  * Runs all the Jest test suite
```
node-server_1  |   GET /pithys - returns a list of Pithys from the mongoDb
node-server_1  |     ✓  GET /Pithys list all pithys (50 ms)
node-server_1  |     ✓  POST /pithys API Request create test Record (18 ms)
node-server_1  |     ✓  GET /pithys/shortId retrieve the test Record (4 ms)
node-server_1  |     ✓  GET /pithys/shortId check for 404 for a shortId that doesn't exist (3 ms)
node-server_1  | 
node-server_1  | Test Suites: 1 passed, 1 total
node-server_1  | Tests:       4 passed, 4 total
node-server_1  | Snapshots:   0 total
node-server_1  | Time:        3.95 s
node-server_1  | Ran all test suites.
```

To Stop the server `Ctrl-C`

