"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_js_1 = require("./env.js");
const router_js_1 = require("./routes/router.js");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const path_static_files = path_1.default.join(__dirname, "..", "public");
app.use(express_1.default.static(path_static_files));
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/", router_js_1.router);
app.listen(env_js_1.PORT, () => {
    console.log(`Escuchando en el puerto ${env_js_1.PORT}`);
});
