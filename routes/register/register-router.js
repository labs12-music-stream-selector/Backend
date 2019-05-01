const router = require('express').Router();
const db = require('../../data/dbConfig');
      
router.post('/oauth', async (req, res) => {
  try {
    let user = req.body;
    let {token, name, email} = user;
    const existingUser =  await db('usersOAuth').where({email: email}).first();
    if (existingUser) {
      return res.status(201).json({ token, email, name }); 
    } else {
      const id = await db('usersOAuth').insert(user).returning("id");
      if (id) {
        return res.status(200).json({ id, token, name, email });  
      } 
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
});
      
module.exports = router;