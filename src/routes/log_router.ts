import express from 'express';
import {userValidation} from '../handlers/log/logUser.js';

const logRouter = express.Router();

logRouter.post("/", userValidation);

export {logRouter};