const router = require('express').Router();
const db = require('../../data/dbConfig.js');

router.post('/oauth', async (req, res) => {
  try {
    let { name, email, token } = req.body;
    const data = {
      name,
      email,
      token
    }
    console.log("data: ", data);
    if (user.token) {
      console.log("first if passes")
      const user = await db('users').where({ name: data.name }).first();
      console.log("user: ", user)
      if (user) {
        console.log("second if passes")
        res.status(200).json({ message: "Welcome back!", token })
      } else {
        console.log("second if fails")
        const id = await db('users').insert(user).returning("id");
        console.log("id: ", id)
        if (id > 0) {
          res.status(201).json({ message: "New user created", token })
        } else {
          res.status(500).json({ message: "internal server error" });
        }
      }
    } else {
      res.status(500).json({ message: "Error sending info to server" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// function generateToken(user) {
//   const payload = {
//     subject: user.id,
//     username: user.username
//   }
//   secret = process.env.SECRET;
//   const options = {
//     expiresIn: '1d',
//   }
//   return jwt.sign(payload, secret, options);
// }

module.exports = router;