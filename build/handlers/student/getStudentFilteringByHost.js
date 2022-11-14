"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentsFilteringByHost = void 0;
const studentServices_js_1 = require("../../model/services/studentServices.js");
function getStudentsFilteringByHost(req, res) {
    const host = req.params.host;
    (0, studentServices_js_1.findStudentsFilteringByHost)(host, (err, result) => {
        if (err) {
            res.status(404).json({ "message": err.message });
        }
        res.status(200).json(result);
    });
}
exports.getStudentsFilteringByHost = getStudentsFilteringByHost;
