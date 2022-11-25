import {db} from "../../config.js";
import express from 'express';
import axios from "axios";

async function userValidation(req: express.Request, res: express.Response){
    const result = await axios.get(`http://localhost:3000/users/${req.body.email}`);
    console.log(result);
    res.send("respuesta momnetánea");
    /*if (result.status==404){
        res.send("login not ok");
        res.status(404).render("pages/login", {errorMessage: "El usuario no existe en la BD"});
    }
    if (req.body.password == result.data.password){
        res.status(200).send("LOGIN OK");
    } 
    res.send("login not ok 2");
    res.status(401).render("pages/login", {errorMessage: "El usuario y la contraseña no son válidos"});
    */
}

export {userValidation};