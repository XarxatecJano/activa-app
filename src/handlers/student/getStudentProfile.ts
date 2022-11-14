import express from 'express';
import {Student} from '../../model/types/student.js';
import axios from 'axios';



async function getStudentProfile(req: express.Request, res: express.Response){
    
    const targetStudentId: number = 3; 
    const targetStudent = await axios(`http://localhost:3000/students/${targetStudentId}`);
    //TODO const targetStudent: Student = axiosResponse.data;
    console.log(targetStudent);
    res.render("pages/studentProfileUpdater", {
        student: targetStudent.data
    });
}

export {getStudentProfile};