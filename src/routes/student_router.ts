import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';
import {getOneStudent} from '../handlers/student/getOneStudent.js';
import {patchOneStudent} from '../handlers/student/patchOneStudent.js';
import {deleteStudent} from '../handlers/student/deleteOneStudent.js';
import {getStudentProfile} from '../handlers/student/getStudentProfile.js';
import {validateToken} from '../utils/validateToken.js';
import {userIsAdmin} from '../utils/userIsAdmin.js';

const studentRouter = express.Router();

studentRouter.get("/", validateToken, getStudents);

studentRouter.get("/:id_student", validateToken, getOneStudent);

studentRouter.post("/", validateToken, insertStudent);

studentRouter.patch("/:id_student", validateToken, patchOneStudent);

studentRouter.delete("/:id_student", validateToken, userIsAdmin, deleteStudent);


export {studentRouter};