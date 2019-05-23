const userDb = require('../routes/user/UserModel.js');
const playlistDb = require('../routes/playlists/playlistModel.js')

// quickly see what this file exports
module.exports = {
  authenticate, validUser,validUserId,  checkForPlaylistOwner, specialpermission
};
// An Permissible user can be overcome this 
// Must know seret_key
async function specialpermission(req, res, next) {
    const bosstoken = process.env.SPECIAL_KEY;
    const token = req.get('Authorization');
    if (token) {
      try{
          if (token===bosstoken){     
              next();
          }
          else{
              return res.status(403).json({error: 'You are not authorized or please login again'})
          }
      } catch(err){
            console.log(err);
      }
    } else {
      return res.status(401).json({
        error: 'No token provided, must be set on the Authorization Header',
      });
    }
  }
// Check if user is logged in and have a token
async function authenticate(req, res, next) {
    try{
        const token = req.get('Authorization');
        if (token) {
            const extistedtoken = await userDb.findBytoken(token);
            if (extistedtoken){     
                next();
            } else {
                return res.status(403).json({error: 'You are not authorized or please login again'})
            }      
        } else {
            return res.status(401).json({error: 'No token provided, a token must be set on the Authorization Header'});
        } 
    } catch(err){
        console.log("err", err);
    }
}

 // Validate if User Id is exists
 async function validUserId(req, res, next){
    try {
        const user = await userDb.findById(req.body.user_id || req.params.id);
        if (!user) {
            res.status(400).json({ error: 'This Id does not exists' });
        } else {
            next();
        }
    } catch (err) {
        console.log("err", err);
    }
}

// Check if this user has permission to perform any operation 

async function validUser(req, res, next){
  try{
    const extistedtoken = await userDb.findBytoken((req.get('Authorization')));
    const userId = extistedtoken.id;
    const urlId = parseInt(req.params.id || req.body.user_id);// this id is users id

    if(userId !== urlId){
      res.status(403).json({error: 'You are not authorized '})
    } else{ 
      next();
    }
  } catch(err){
    res.status(500).json({message: 'An error occured', err})
  }
}

/// Check if the user is the owner of the playlist 

async function checkForPlaylistOwner(req, res, next){
    try{
        const {id} = req.params;
        const extistedtokenId = await userDb.findBytoken((req.get('Authorization')));
        const tokenId = extistedtokenId.id;
        const userId = await playlistDb.findUserByPlaylistId(id);
        if (!userId) {
            res.status(400).json({ error: 'there is no playlist with this id' });
            return;
        }
        if (tokenId !== userId.user_id) {  
            res.status(403).json({ message: "you are not Authorized to perform this operation" });
        } else {
            next();
        }
    } catch(err){
        console.log("Error", err);

    }
}


