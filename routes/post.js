const express = require('express');
const router = express.Router();

router.get('/:postId', (req, res) => {
  console.log('body:', req.body);
  res.send(`Getting postt with id: ${req.params.postId}`);
})

router.put('/:postId', (req, res) => {
  res.send(`Update post with id: ${req.params.postId}`);
})

router.delete('/:postId', (req, res) => {
  res.send(`Delete post with id: ${req.params.postId}`);
});

module.exports = router;
