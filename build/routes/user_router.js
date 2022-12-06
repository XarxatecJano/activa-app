"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const getOneUser_js_1 = require("../handlers/user/getOneUser.js");
const insertUser_js_1 = require("../handlers/user/insertUser.js");
const validateToken_js_1 = require("../utils/validateToken.js");
const userIsAdmin_js_1 = require("../utils/userIsAdmin.js");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get("/:user_email", getOneUser_js_1.getOneUser);
userRouter.post("/", validateToken_js_1.validateToken, userIsAdmin_js_1.userIsAdmin, insertUser_js_1.insertUser);
