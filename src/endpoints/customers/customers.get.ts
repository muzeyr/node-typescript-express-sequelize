import { Request, Response } from 'express'
import { AppCustomerDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
    return AppCustomerDao
        .findAll()
        .then(appusers => res.status(200).send(appusers))
        .catch(error => res.boom.badRequest(error))
}

