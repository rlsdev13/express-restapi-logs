require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const routes = {
    main : '/api/main',
    logs : '/api/logs',
    apps : '/api/apps'
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes.main, require('./routes/main.routes'));
app.use(routes.logs, require('./routes/logs.routes'));
app.use(routes.apps, require('./routes/application.routes'));

module.exports = app;
