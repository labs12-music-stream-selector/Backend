const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    console.log(process.env.SECRET);
    jwt.verify(token, process.env.SECRET, { algorithm: 'RS256' }, (err, decodedToken) => {
      console.log('err: ', err)
      if (err) { // the token is not valid
        res.status(401).json({ message: 'Invalid Credentials' });
      } else { // If token valid
        req.decodedJwt = decodedToken;  // makes the token info available to the rest of the application
        next();
      }
    }) // have secret on the .env as a variable when in production
  } else {
    res.status(401).json({ message: 'No token provided' }); // no token, no passage
  }
};
