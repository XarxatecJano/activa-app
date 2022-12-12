"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRouter = void 0;
const express_1 = __importDefault(require("express"));
const logUser_js_1 = require("../handlers/log/logUser.js");
const logRouter = express_1.default.Router();
exports.logRouter = logRouter;
logRouter.post("/", logUser_js_1.userValidation);
logRouter.get("/switchpartials/:footer", (req, res) => {
    res.render("pages/switchingPartials", { footer: req.params.footer });
});
