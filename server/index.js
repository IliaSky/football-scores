const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const apiRouter = require('./api');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use('/api', apiRouter);

app.listen(8080, () => console.log('Listening on port 8080!'));
