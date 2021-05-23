import { Express } from 'express'
import { AppCustomerController } from '../endpoints/_index'

export function routes(app: Express) {

    app.get('/api/customer', AppCustomerController.AppCustomerGet.list)
    app.post('/api/customer', AppCustomerController.AppCustomerPost.create)

}
