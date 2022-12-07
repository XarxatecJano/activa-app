import express from "express";
import {createStudent} from "../../model/services/studentServices.js";
import {Student} from "../../model/types/Student.js";
import jsonwebtoken from 'jsonwebtoken';
import { jwtToken } from "../../model/types/jwtToken.js";
import dotenv from 'dotenv';

async function insertStudent(req: express.Request, res: express.Response){
    
    const newStudent: Student = req.body;
    if (req.session.token != undefined){ 
      const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
      const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
      const idUser = myTokenVerified.id;
      createStudent(newStudent, idUser, (err: Error, studentId: number) => {
        if (err) {
          res.status(500).json({"message": err.message});
        } else {
          res.status(200).json({"orderId": studentId});
        }
       });
    } else {
      res.status(401).json({"message": "Es obligatorio autenticarse antes de realizar esta operación"});
    }
};

export {insertStudent};