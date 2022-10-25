import express from 'express';

export class contactFormProcessUtilities {
    static sendResponseToBrowserAfterSubmit(req: express.Request, res: express.Response){
        res.send("Hola");
    }
}