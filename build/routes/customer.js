"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("../endpoints/_index");
function routes(app) {
    app.get('/api/customer', _index_1.AppCustomerController.AppCustomerGet.list);
    app.post('/api/customer', _index_1.AppCustomerController.AppCustomerPost.create);
}
exports.routes = routes;

//# sourceMappingURL=customer.js.map
