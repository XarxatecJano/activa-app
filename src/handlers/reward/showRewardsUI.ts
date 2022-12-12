import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {jwtToken} from '../../model/types/jwtToken';
import {Student} from '../../model/types/Student'
import axios from 'axios';

async function showRewardsUI(req: express.Request, res: express.Response){
    if (req.session.token != undefined){ 
        const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
        const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
        const userLoggedStudentData: Student= await axios(`http://localhost:3000/students/userId/${myTokenVerified.id}`);
        const resultAxios = await axios(`http://localhost:3000/students/data`);
        const studentData: Student[] = resultAxios.data; 

        res.status(200).render("pages/rewards",{userStudentData: userLoggedStudentData, studentsData: studentData});
    } else {
        res.status(401).send("No te has autenticado");
    }
}

export {showRewardsUI};