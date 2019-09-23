'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;

// Routes definitions
var postRoutes = require('./src/routes/post');
var userRoutes = require('./src/routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Serve static files
app.use(express.static('public'));

// API Routes
app.use('/user', userRoutes);
app.use('/post', postRoutes);

app.listen(port, function () {
  return console.log('Example app listening on port ' + port + '!');
});