import express from 'express';
import HomeController from '../controllers/HomeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", HomeController.getHomepage)

    router.post('/webhook', HomeController.postWebhook);
    router.get('/webhook', HomeController.getWebhook);
    return app.use('/', router);
};
module.exports = initWebRoutes;