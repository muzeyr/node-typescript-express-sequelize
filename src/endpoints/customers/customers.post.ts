import { Request, Response } from 'express'
import { AppCustomerDao } from '../../dao/_index'

export function create(req: Request, res: Response) {

    req.checkBody('card_code', 'card_code is required').notEmpty()

    req.getValidationResult()
        .then(function(result) {
            if (result.isEmpty()) {
                return AppCustomerDao.create(req.body)
                    .then(appuser => res.status(201).send(appuser))
                    .catch(error => res.boom.badRequest(error))
            } else {
                res.boom.badRequest('Validation errors', result.mapped())
            }
        })
}
