import { Model, STRING, UUID, Deferrable } from 'sequelize'
import sequelize from './_index'

export class Customer extends Model {

}

export class CustomerModel {
    id: string
    card_code: string
    phone: string
    uid: string
    card_name: string
    createdAt: Date
    updatedAt: Date
}

Customer.init(
    {
        card_code: STRING(50),
        card_name: STRING(50),
        uid: STRING(50)
    },
    { sequelize, modelName: 'Customer' }
)
