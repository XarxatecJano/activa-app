import express from 'express';
import { Student } from '../../model/types/Student.js';
import {findOneStudentByIdUSer} from '../../model/services/studentServices.js';

async function getOneStudentByUserId(req: express.Request, res: express.Response){
    const userId = req.params.id_user;
    findOneStudentByIdUSer(userId, (err: Error, result:Student)=>{
        if(err){
            res.status(404).json({"message": err.message});
        }
        res.status(200).json(result);
    })
}

export {getOneStudentByUserId};