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
        const result = yield axios_1.default.get(`http://localhost:3000/users/${req.body.email}`);
        console.log(result);
        res.send("respuesta momnetánea");
        /*if (result.status==404){
            res.send("login not ok");
            res.status(404).render("pages/login", {errorMessage: "El usuario no existe en la BD"});
        }
        if (req.body.password == result.data.password){
            res.status(200).send("LOGIN OK");
        }
        res.send("login not ok 2");
        res.status(401).render("pages/login", {errorMessage: "El usuario y la contraseña no son válidos"});
        */
    });
}
exports.userValidation = userValidation;
