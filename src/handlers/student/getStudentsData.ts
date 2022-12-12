import { Student } from "../../model/types/Student.js";
import {findAllStudents} from "../../model/services/studentServices.js";
import express from 'express';


async function getStudentsData(req: express.Request, res: express.Response){
    findAllStudents((err:Error, students:Student[])=>{
        if(err){
            res.status(404).json({"message": err.message});
        } else {
            res.status(200).json(students);
        }
       
    })
}

export {getStudentsData};