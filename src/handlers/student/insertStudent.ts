import express from "express";
import {createStudent} from "../../model/services/studentServices.js";
import {Student} from "../../model/types/Student.js";

async function insertStudent(req: express.Request, res: express.Response){
    
    const newStudent: Student = req.body;
    createStudent(newStudent, (err: Error, studentId: number) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
  
      res.status(200).json({"orderId": studentId});
    });
};

export {insertStudent};