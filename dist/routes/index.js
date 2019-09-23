'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Welcome on our blog');
});

module.exports = router;