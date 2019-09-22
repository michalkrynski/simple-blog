const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(posts);
  })
});

router.post('/', (req, res) => {
  const postData = new Post(req.body);
  postData.save((err, post) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(post);
  });
})

module.exports = router;
