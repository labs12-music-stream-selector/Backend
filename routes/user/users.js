const router = require('express').Router();
const userDb = require('./UserModel.js');
const jwt = require('jsonwebtoken')
const secret = require('../../auth/config/secrets.js')

// Getting all the users

router.get('/', async (req, res) => {
    await userDb.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).send(err);
        })
  });

//Get a user by Id
router.get('/:id', validUserId, async(req, res)=>{
    try{
        const user = await userDb.findById(req.params.id);
        res.status(200).json(user);
    }catch (err){
        res.status(500).json({ error: `there was an error: ${err}` });
    }
});

// Deleting user profile by id
router.delete('/:id', validUserId, (req, res) => {
    const id =req.params.id;
    userDb.deleteUser(id)
    .then( confirm => {
      res.status(200).json({message: `${confirm} id deleted` })
     })
  })

  // Updating Users profile
router.put('/:id',validUserId, async (req, res) => {
    try {
        const {name, email} = req.body;
        const {id} =req.params;
        if (!name || !email) {
          res.status(400).json({ message: "Please provide all the required information of the user." })
       }
        const count = await userDb.update(id, req.body)
        .then(user=>{
          if (user) {
            res.status(200).json(req.body)
          } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
          })
    } catch (err) {
      res.status(500).json({ error: `there was an error accessing the db: ${err}` });
    }
  }
);

 // Validate Users Id if exists
async function validUserId(req, res, next){
  try {
    const user = await userDb.findById(req.params.id);
    if (!user) {
      res.status(400).json({ error: 'This Id is not exists' });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
}

// function restricted(req, res, next) {
//   const token = req.headers.authorization
//   console.log(req.headers)
//   if(token) {
//     jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
//       if(err) {
//         res.status(401).json({ message: 'Invaild credentials' })
//       } else {
//         req.decodedJwt = decodedToken
//         next()
//       }
//     })
//   } else {
//     res.status(401).json({ message: 'No token provided' })
//   }
// }

module.exports = router;
