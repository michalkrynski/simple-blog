const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const mongoose = require('mongoose');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected ziom')
  // we're connected!
});

var postSchema = new mongoose.Schema({ body: String });
var Post = mongoose.model('Post', postSchema);

// const indexRoute = require('./routes/index');
// const postRoutes = require('./routes/post');

const models = require('./models/index');

// Serve static files
app.use(express.static('public'));

// Routes
// app.use('/', indexRoute);
// app.use('/post', postRoutes);

app.post('/post', (req, res) => {
  var postData = new Post(req.body);
  console.log('body:', req.body);
  postData.save()
    .then(result => res.redirect('/'))
    .catch(err => {
      console.error(err);
      res.status(400).send("Unable to save data");
    });
  // res.send(`Getting postt with id: ${req.params.postId}`);
})

app.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.send(posts)
 });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
