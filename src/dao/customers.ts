import * as uuid from 'uuid'
import { AppCustomer } from './../sqlz/models/customers'

export function create(appCustomer: any): Promise<any> {

    return AppCustomer.findOne({
        where: { card_code: appCustomer.card_code }
    })
        .then(item => {
            console.log(item);
            return AppCustomer
                .create({
                    uid: uuid.v1(),
                    card_code: appCustomer.card_code,
                    card_name: appCustomer.card_name
                })
        })
}

export function findAll(): Promise<any> {
    return AppCustomer
        .findAll({ include: [{ all: true }] })
} 
