import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import TOKEN from '../config/token';

const router = express.Router();

router.post('/register', function(req, res) {

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, TOKEN.JWT_SECRET, {
      expiresIn: TOKEN.EXPIRATION // expires in 1 hour
    });
    res.status(200).send({ auth: true, token: token });
  });
});

router.post('/login', function(req, res) {

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, token.JWT_SECRET, {
      expiresIn: TOKEN.EXPIRATION // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });

});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

export default router;