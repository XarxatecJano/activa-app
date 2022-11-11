import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';
import {getOneStudent} from '../handlers/student/getOneStudent.js';
import {deleteStudent} from '../handlers/student/deleteOneStudent.js';
const router = express.Router();

router.post("/students",insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.delete("/students", deleteStudent);

export {router};