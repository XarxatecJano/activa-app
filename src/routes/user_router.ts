import express from 'express';
import { getOneUser } from '../handlers/user/getOneUser.js';
import { insertUser } from '../handlers/user/insertUser.js';
import { validateToken } from '../utils/validateToken.js';
import { userIsAdmin } from '../utils/userIsAdmin.js';

const userRouter = express.Router();

userRouter.get("/:user_email", getOneUser);

userRouter.post("/", validateToken, userIsAdmin, insertUser);

export {userRouter};