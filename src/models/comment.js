import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: String,
  body: String,
  data: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
