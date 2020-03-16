const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const passport = require('passport');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
require('./config/passport');

app.use(cors());
app.use(morgan('dev'));
app.use(passport.initialize());

// body parser for url params and json
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(bodyParser.json());

// set base url for api
routes(app);

// catch all routers
app.use('*', (req, res) => res.status(404)
  .json({
    message: 'Not Found.'
  }));

module.exports = app;
