const express = require('express');
const app = express();
const port = 3000;

const indexRoute = require('./routes/index');
const postRoutes = require('./routes/post');

// Serve static files
app.use(express.static('public'));
// Routes
app.use('/', indexRoute);
app.use('/post', postRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
