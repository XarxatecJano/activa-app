"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactFormProcessUtilities = void 0;
class contactFormProcessUtilities {
    static sendResponseToBrowserAfterSubmit(req, res) {
        const expRegMail = /.+@xarxatecactiva\.com$/;
        if (expRegMail.test(req.body.emailAddress)) {
            res.send(`<p>Hola, soy ${req.body.name}</p>`);
        }
        else {
            res.send(`<p>No es un mail válido</p>`);
        }
    }
}
exports.contactFormProcessUtilities = contactFormProcessUtilities;
