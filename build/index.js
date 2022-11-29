"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_js_1 = require("./routes/router.js");
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
<<<<<<< HEAD
const methodOverride = require('method-override'); //TO-DO: cambiar a import
const session = require("express-session"); //TO-DO: cambiar a import, problemas typescript
const express_mysql_session_1 = __importDefault(require("express-mysql-session"));
const config_js_1 = require("./config.js");
const mysql_1 = __importDefault(require("mysql"));
=======
const session = require('express-session'); //to-do with import
const express_mysql_session_1 = __importDefault(require("express-mysql-session"));
const methodOverride = require('method-override');
>>>>>>> feature/fixingBugs
dotenv.config({ path: path_1.default.join(__dirname, "..", ".env") });
const optionsStore = {
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessiontbl',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data',
        }
    }
};
const sqlStore = new express_mysql_session_1.default(session);
const sessionStore = new sqlStore(optionsStore);
const app = (0, express_1.default)();
app.set("view engine", "ejs");
<<<<<<< HEAD
const db = mysql_1.default.createConnection(config_js_1.connectionData);
const sessionStore = new ((0, express_mysql_session_1.default)(session))({
    expiration: 10800000,
    createDatabaseTable: true,
    schema: {
        tableName: 'session',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, db);
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false
=======
app.use(session({
    name: "probando_sesiones",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: true
    }
>>>>>>> feature/fixingBugs
}));
const path_static_files = path_1.default.join(__dirname, "..", "public");
app.use(express_1.default.static(path_static_files));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && "_method" in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
app.use("/", router_js_1.router);
app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});
