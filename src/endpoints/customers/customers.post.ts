import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import { AppCustomerDao } from '../../dao/_index'

export function create(req, res: Response) {
    console.log(2222);
    AppCustomerDao.create(req.body)
        .then(appuser => res.status(201).send(appuser))
        .catch(error => res.boom.badRequest(error));


}
