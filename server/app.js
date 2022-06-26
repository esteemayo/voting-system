const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('express-async-errors');

// requiring routes
const pollRoute = require('./routes/polls');

const app = express();

// implement cors
app.use(cors());

// Access-Control-Allow-Origin
app.options('*', cors());

// development logging
if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

// express body parser middleware
app.use(express.urlencoded({ extended: true, limit: '30Mb' }));

// route middleware
app.use('/api/v1/polls', pollRoute);

module.exports = app;
