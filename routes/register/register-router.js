const router = require('express').Router();
const db = require('../../data/dbConfig');

router.post('/oauth', async (req, res) => {
  console.log("/oauth route");
  try {
    let user = req.body;
    let { token, name, email } = user;
    const existingUser = await db('users').where({ 'email': email }).select('id').first();
    if (existingUser) {
      const red = await db('users').where("id", existingUser.id).update(user).returning("id");
      if(red){
        return res.status(200).json({ id: existingUser.id, token, email, name });
      }
    } else {
      const [id] = await db('users').insert(user).returning("id");
      if (id) {
        return res.status(201).json({ id, token, name, email });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
});

module.exports = router;
