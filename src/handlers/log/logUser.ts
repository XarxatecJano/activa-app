import {db} from "../../config.js";
import { User } from "../../model/types/User.js";
import express from 'express';
import axios from "axios";

async function userValidation(req: express.Request, res: express.Response){

    try {
        const result = await axios.get(`http://localhost:3000/users/${req.body.email}`);
        if (result.data){
            const user: User = result.data;
            if (req.body.password == result.data.password){
                res.send("LOGIN OK");
            } else {
                res.render("pages/login", {errorMessage: "El usuario y la contraseña no coinciden"});
            } 
        }
        res.render("pages/login", {errorMessage: "404. No existe ese usuario"});
        
    } catch(error: any){
        res.send(error);
    }
    
}

export {userValidation};