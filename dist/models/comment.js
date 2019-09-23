'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  author: String,
  body: String,
  data: { type: Date, default: Date.now }
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;