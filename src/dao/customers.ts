import * as uuid from 'uuid'
import { Customer } from './../sqlz/models/customers'

export function create(appCustomer: any): Promise<any> {

    return Customer.findOne({
        where: { card_code: appCustomer.card_code }
    })
        .then(item => {
            console.log(item);
            return Customer
                .create({
                    uid: uuid.v1(),
                    card_code: appCustomer.card_code,
                    card_name: appCustomer.card_name
                })
        })
}

export function findAll(): Promise<any> {
    console.log(999);
    return Customer
        .findAll()
} 
