const router = require('express').Router();
const userDb = require('./UserModel.js');
const {authenticate, specialpermission, validUserId, validUser }= require ('../../auth/auth.js');

// Getting all the users
// Protected
router.get('/',specialpermission, async (req, res) => {
    await userDb.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).send(err);
        })
  });

//Get a user info by Id
// Protected
router.get('/:id', authenticate, validUserId, validUser, async(req, res)=>{
    try{
        const user = await userDb.findById(req.params.id);
        res.status(200).json(user);
    }catch (err){
        res.status(500).json({ error: `there was an error: ${err}` });
    }
});

// Deleting user profile by id
// Protected
router.delete('/:id', authenticate, validUserId,validUser, (req, res) => {
    const id =req.params.id;
    userDb.deleteUser(id)
    .then( confirm => {
      res.status(200).json({message: "Your Id deleted successfully, Id no was:", id  })
     })
  })

// Updating Users profile

router.put('/:id',authenticate, validUserId,validUser, async (req, res) => {
    try {
        const {name, email} = req.body;
        const updatedinfo = req.body;
        const {id} =req.params;
        if (!name || !email) {
          res.status(400).json({ message: "Please provide all the required information of the user." })
       }
        const count = await userDb.update(id, req.body)
        .then(user=>{
          if (user) {
            res.status(200).json({message: `your update submitted successfully.`, updatedinfo})
          } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
          })
    } catch (err) {
      res.status(500).json({ error: `there was an error accessing the db: ${err}` });
    }
  }
);

module.exports = router;
