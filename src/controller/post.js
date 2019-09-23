import Post from '../models/Post';
import { runInNewContext } from 'vm';
// import User from '../models/User';

export default {
  async getPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async getPost(req, res) {
    try {

    } catch (err) {
      res.status(500).send(err);
    }
  },
  async addPost(req, res, next) {
    try {
      const postData = new Post(req.body);
      postData.save((err, post) => {
        if (err) throw err;
        res.status(200).send(post);
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  // TODO: Remove, Edit...
}