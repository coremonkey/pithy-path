# Pithy-Path 

## Creating the applications from scratch
The application has 2 applications running in different process an Angular app and node Express both use Typescript.
the both live under a directory **pithy-path**

* Node-app listens on port 3000 for requests and read/writes to the MongoDb.

## Building node-app
1. `mkdir node-app`
2. `cd node-path`
3. Create a new project `npm init`
4. Install the packages needed `npm install typescript express body-parser mongoose cors ts-node-dev`
4. `npm install @types/express @types/mongoose @types/cors`
5. create as tsconfig file `npx tsc --init`
6. `mkdir src` and cd into
7. create a index.ts code is in this repo
8. add the following to package.json to compile and watch .ts down to .js
    ```
      "scripts": {
        "start": "ts-node-dev src/index.ts"
        },
    ```

## Build the angular-app

1. cd to the root of the project **pithy-path**
2. Make new angular app `ng new angular-app` no routing standard CSS
3. Test the factory template works `cd angular-app` `ng serve`
4. copy the contents from the *angular-app\src directory* in this repo

## Run the App in Development mode

### Start the MongoDB
1. Start a mongoDb docker Image `docker run --name pithy -p 27017:27017 -d mongo`
2. To check docker images running `docker -ps`

### Start the node app 
Open a terminal
`cd node-app`
`npm start`

You should see
```
> dbserver@1.0.0 start
> ts-node-dev src/index.ts

[INFO] 08:00:45 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
Server listening on 3000 CORS is only allowing from 'http://localhost:/4200' 
connected to mongoDb mongodb://localhost:27017/pithy-path'
```
### Start the angular-app 
Open a second terminal
`cd angular-app`
`ng serve`

you should see
```
Build at: 2021-05-26T08:04:50.305Z - Hash: 5f69c8113533fb0edbbc - Time: 7239ms
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
✔ Compiled successfully.
```


## Docker Compose
The following describes the docker files included in the repo and the steps used to create the docker and how to run the docker.

### Docker setup
**docker-compose.yam**
* builds and runs the angular app and nginx server
* builds and runs the node app
* loads the mongo image

### Running the Docker compose
Stop any versions of the apps running in terminals and stop any mongoDb images running in the background
`docker ps`
`docker stop <CONTAINER-NAME>`

`docker-compose up`
If you have made any changes to you need to add --build 
# Todo
- [x] Create Angular app from scratch
- [ ] Improve docker Angular setup
- [x] create docker
- [ ] test for duplicate
- [ ] jest
- [x] pass enviroment to apps look at juniper notes 'Docker Command'
- [ ] copy to clipboard next to each link

# Setting up git-hub

1. add node_modules to .gitignore