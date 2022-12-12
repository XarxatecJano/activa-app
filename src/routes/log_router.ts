import express from 'express';
import {userValidation} from '../handlers/log/logUser.js';

const logRouter = express.Router();

logRouter.post("/", userValidation);

logRouter.get("/switchpartials/:footer", (req:express.Request, res:express.Response)=>{
    res.render("pages/switchingPartials", {footer: req.params.footer});
})

export {logRouter};