const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../data/dbConfig.js');

// router.get('/', (req, res) => {

// })

router.post('/', async (req, res) => {
  try {
    let { username, password } = req.body;
    const user = await db('users').where({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ token })
    } else {
      res.status(500).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }
  secret = process.env.SECRET;
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, secret, options);
}

module.exports = router;