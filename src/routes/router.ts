import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';
import {getOneStudent} from '../handlers/student/getOneStudent.js';
import {deleteStudent} from '../handlers/student/deleteOneStudent.js';
import { getStudentProfile } from '../handlers/student/getStudentProfile.js';
import { updateOneStudent } from '../handlers/student/updateOneStudent.js';

const router = express.Router();

router.get("/editStudentProfile", getStudentProfile);

router.post("/students",insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.delete("/students", deleteStudent);

router.put("/students/:id_student", updateOneStudent);

export {router};