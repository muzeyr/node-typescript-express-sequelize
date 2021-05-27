"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _index_1 = require("./_index");
class Customer extends sequelize_1.Model {
}
exports.Customer = Customer;
class CustomerModel {
}
exports.CustomerModel = CustomerModel;
Customer.init({
    card_code: sequelize_1.STRING(50),
    card_name: sequelize_1.STRING(50),
    uid: sequelize_1.STRING(50)
}, { sequelize: _index_1.default, modelName: 'Customer' });

//# sourceMappingURL=customers.js.map
