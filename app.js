const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

// Routes definitions
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Database connection
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Serve static files
app.use(express.static('public'));

// API Routes
app.use('/post', postRoutes);
app.use('/user', userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
