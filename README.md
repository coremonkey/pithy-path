# Pithy-Path 

!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This a demonstration and tutorial project of MEAN (Mongo, Express, Angular, Node.js) application. The application has the following simple function

* User enters a URL
* Is returned a shorted URL
* A list pof previous shorted URLS listed

As this is purely education and proof of concepts, it uses Docker Containers configured to allow for continuous development using container. See Docker for more details. 

### Built With

* [Angular](https://angular.io/)
* [NPM](https://www.npmjs.com/get-npm)
* [MongDb](https://www.mongodb.com/)
* [Express] (https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Docker] (https://www.typescriptlang.org/)
* [Jest] (https://jestjs.io/)

## Getting Started

### Pre-Requisites
Most of the framework and applications are installed during the build process but you will need to have the following already installed :-
* Docker
* npm

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

# Todo
- [ ] jest
- [ ] test for duplicate
- [ ] Complete CRUD functions
- [ ] copy to clipboard next to each link
- [ ] Consider using OpenAPI aka Swagger
