"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const customers_1 = require("./../sqlz/models/customers");
function create(appCustomer) {
    return customers_1.Customer.findOne({
        where: { card_code: appCustomer.card_code }
    })
        .then(item => {
        console.log(item);
        return customers_1.Customer
            .create({
            uid: uuid.v1(),
            card_code: appCustomer.card_code,
            card_name: appCustomer.card_name
        });
    });
}
exports.create = create;
function findAll() {
    console.log(999);
    return customers_1.Customer
        .findAll();
}
exports.findAll = findAll;

//# sourceMappingURL=customers.js.map
