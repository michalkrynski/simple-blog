import jwt from 'jsonwebtoken';
import TOKEN from '../config/token';

const verifyToken = (req, res, next) => {
  console.log(req.headers)
  const token = req.headers['x-access-token'];

  if (!token) {
    res.status(403).send({ auth: false, message: 'No token provided.' })
  }

  jwt.verify(token, TOKEN.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(500).send({ auth: false, message: 'Invalid token.' });
    }
    res.userId = decoded.id;
    next();
  })
}

export default verifyToken;