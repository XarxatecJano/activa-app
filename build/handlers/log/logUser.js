"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const axios_1 = __importDefault(require("axios"));
function userValidation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield axios_1.default.get(`http://localhost:3000/users/${req.body.email}`);
            if (result.data) {
                const user = result.data;
                if (req.body.password == result.data.password) {
                    res.send("LOGIN OK");
                }
                else {
                    res.render("pages/login", { errorMessage: "El usuario y la contraseña no coinciden" });
                }
            }
            res.render("pages/login", { errorMessage: "404. No existe ese usuario" });
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.userValidation = userValidation;