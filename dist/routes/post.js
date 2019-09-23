'use strict';

var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get('/', function (req, res) {
  Post.find(function (err, posts) {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(posts);
  });
});

router.post('/', function (req, res) {
  var postData = new Post(req.body);
  postData.save(function (err, post) {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(post);
  });
});

module.exports = router;