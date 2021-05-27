"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const AppCustomerRoutes = require("./customer");
function initRoutes(app) {
    winston.log('info', '--> Initialisations des routes');
    app.get('/api', (req, res) => res.status(200).send({
        message: 'server is running!'
    }));
    AppCustomerRoutes.routes(app);
    app.all('*', (req, res) => res.boom.notFound());
}
exports.initRoutes = initRoutes;

//# sourceMappingURL=_index.js.map
