const express = require('express');
const path = require('path');
const rutasApp = require('./rutas');

let app;

const createApp = () => {
    app = express();
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(rutasApp);
    return app;
}

const getApp = () => app

module.exports = {
    createApp,
    getApp
}