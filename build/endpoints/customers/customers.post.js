"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("../../dao/_index");
function create(req, res) {
    console.log(2222);
    req.getValidationResult(req)
        .then(function (result) {
        if (result.isEmpty()) {
            return _index_1.AppCustomerDao.create(req.body)
                .then(appuser => res.status(201).send(appuser))
                .catch(error => res.boom.badRequest(error));
        }
        else {
            res.boom.badRequest('Validation errors', result.mapped());
        }
    });
}
exports.create = create;

//# sourceMappingURL=customers.post.js.map
