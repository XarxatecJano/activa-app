import express from 'express';
import { contactFormProcessUtilities } from '../handlers/contacFormProcessUtilities.js';

const router = express.Router();

router.post("/procesa-formulario",contactFormProcessUtilities.sendResponseToBrowserAfterSubmit);

export {router};