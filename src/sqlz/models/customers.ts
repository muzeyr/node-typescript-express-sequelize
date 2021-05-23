import { Model, STRING, UUID, Deferrable } from 'sequelize'
import sequelize from './_index'
import { AppUser } from './appuser'

export class AppCustomer extends Model {

}

export class AppUserModel {
    id: string
    card_code: string
    phone: string
    uid: string
    card_name: string
    createdAt: Date
    updatedAt: Date
}

AppCustomer.init(
    {
        card_code: STRING(50),
        card_name: STRING(50)
    },
    { sequelize, modelName: 'AppCustomer' }
)

AppCustomer.belongsTo(AppUser, {
    foreignKey: 'userId'
})
