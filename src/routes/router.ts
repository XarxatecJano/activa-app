import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";

const router = express.Router();

router.post("/student",insertStudent);

export {router};