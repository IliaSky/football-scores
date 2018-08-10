const express = require('express');
const session = require('express-session');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const db = require('./db');
const apiRouter = require('./api');
const authentication = require('./auth');

app.use(session({
  secret: 'dummy secret',
  resave: false,
  saveUninitialized: false
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

authentication.setup(app, db);
app.use('/api', apiRouter);

app.listen(8080, () => console.log('Listening on port 8080!'));
