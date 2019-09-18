const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  author: String,
  body: String,
  data: { type: Date, default: Date.now },
});

const authorSchema = new Schema({
  name: String,
  position: String,
});

const Post = mongoose.model('Post', postSchema);
const Author = mongoose.model('Author', authorSchema);

module.exports = {
  Post,
  Author,
}
