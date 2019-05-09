const router = require('express').Router();
const db = require('../../data/dbConfig');

router.post('/oauth', async (req, res) => {
  console.log("/oauth route");
  try {
    let user = req.body;
    console.log("user: ", user);
    let { token, name, email } = user;
    console.log("token: ", token);
    console.log("name: ", name);
    console.log("email: ", email);
    //console.log(user)
    const existingUser = await db('users').where({ 'email': email }).first();=-
      console.log("existingUser: ", existingUser);
    //console.log(existingUser)
    if (existingUser) {
      console.log("if existingUser true");
      return res.status(200).json({ id: existingUser.id, token, email, name });
    } else {
      console.log("if existingUser false");
      const [id] = await db('users').insert(user).returning("id");
      console.log("id: ", id);
      if (id) {
        console.log("id is true");
        return res.status(201).json({ id, token, name, email });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
});

module.exports = router;
