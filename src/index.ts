import express from 'express';
import {router} from './routes/router.js';
import path from 'path';
import * as dotenv from 'dotenv';
const methodOverride = require('method-override');//TO-DO: cambiar a import
const session = require("express-session");//TO-DO: cambiar a import, problemas typescript
import  MySQLSessionStore from "express-mysql-session";
import {connectionData} from './config.js';
import mysql from "mysql";

declare module 'express-session' {
    export interface SessionData {
      userEmail: string;
    }
  }

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();

app.set("view engine", "ejs");

const db = mysql.createConnection(connectionData);

const sessionStore = new (MySQLSessionStore(session))({
    expiration: 10800000,
    createDatabaseTable: true,
    schema:{
        tableName: 'session',
        columnNames:{
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
},db);

app.use(session({
    secret: process.env.SESSION_SECRET,
    store:sessionStore,
    resave:false,
    saveUninitialized:false
}))

const path_static_files = path.join(__dirname, "..", "public");
app.use(express.static(path_static_files));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride((req: express.Request, res: express.Response)=>{
    if (req.body && typeof req.body === 'object' && "_method" in req.body){
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use("/", router);
app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})
