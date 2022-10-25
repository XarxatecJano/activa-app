import express from 'express';

export class contactFormProcessUtilities {
    static sendResponseToBrowserAfterSubmit(req: express.Request, res: express.Response){
        const expRegMail = /.+@xarxatecactiva\.com$/;
        if (expRegMail.test(req.body.emailAddress)){
            res.send(`<p>Hola, soy ${req.body.name}</p>`);
        } else {
            res.send(`<p>No es un mail válido</p>`);
        }

    }
}