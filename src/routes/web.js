import express from 'express';
import HomeController from '../controllers/HomeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", HomeController.getHomepage)

    router.post('/webhook', HomeController.postWebhook);
    router.get('/webhook', HomeController.getWebhook);
    router.post('/setup-profile', HomeController.setupProfile)
    router.get('/')

    return app.use('/', router);
};




module.exports = initWebRoutes;