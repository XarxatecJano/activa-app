import express, {Request, Response} from "express";
import {createStudent} from "../../model/services/studentServices.js";
import {Student} from "../../model/types/student.js";

export async function insertStudent(req: Request, res: Response){
    const newStudent: Student = req.body;
    createStudent(newStudent, (err: Error, studentId: number) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
  
      res.status(200).json({"orderId": studentId});
    });
};