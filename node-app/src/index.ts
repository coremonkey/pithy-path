import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { json } from 'body-parser';

import { pithyRouter } from "./routes/pithy";

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:4200'];
const databaseURL: string = `${process.env.DB_SERVER_URL}`;
const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins
};
const app = express();
app.use(cors(corsOptions));
app.use(json());
app.use(pithyRouter);
//localhost without docker mongo-db inside docker
console.log(`mongoDb ${databaseURL}`)

mongoose.connect(databaseURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log(`connected to mongoDb ${databaseURL}`)
})
app.listen(3000, () => {
    console.log(`Server listening on 3000. Un waz here @12:46' `)
})
