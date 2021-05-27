"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("../../dao/_index");
function list(req, res) {
    return _index_1.AppCustomerDao
        .findAll()
        .then(appusers => res.status(200).send(appusers))
        .catch(error => res.boom.badRequest(error));
}
exports.list = list;

//# sourceMappingURL=customers.get.js.map
