const router = require('express').Router();
const db = require('../../data/dbConfig.js')
const Db = require('./playlistModel.js');
const userDb = require('../user/UserModel.js');

// get All the playlist
router.get('/', async (req, res) => {
	await Db.find()
			.then(play => {
					res.json(play);
			})
			.catch(err => {
					res.status(500).send(err);
			})
});
//Get a playlist by Id
router.get('/:id', async(req, res)=>{
	try{
			const playlist = await Db.findById(req.params.id);
			res.status(200).json(playlist);
	}catch (err){
			res.status(500).json({ error: `there was an error: ${err}` });
	}
});
// Post a new playlist
router.post('/', validUserId, async (req, res) => {
		try {
			let playlist = req.body;
			let {  name, user_id } = playlist;
			const existingList = await db('playlists').where({ 'name': name, 'user_id':user_id }).first();
			if (existingList) {
				return res.status(200).json({ message: "Please try a different playlist name"   });
			} else {
				const [id] = await db('playlists').insert(playlist).returning("id");
				if (id) {
					return res.status(201).json({ id, name, user_id });
				}
			}
		} catch (error) {
			res.status(500).json({ message: "internal server error", error: error });
		}
	});
// delete a playlist
router.delete('/:id', (req, res) => {
	db('playlists').where({id: req.params.id})
		.del()
		.then(list => {
			if(list) {
				res.status(200).json(json({message: `${confirm} id deleted` }))
			} else {
				res.status(404).json({ message: 'This id of Playlist never exists.' })
			}
		}).catch(err => {
			res.status(500).json(err)
		})
})
// update a playlist
router.put('/:id', async (req, res) => {
	try {
			const {name} = req.body;
			const {id} =req.params;
			if (!name) {
				res.status(400).json({ message: "You didn't updated anything" })
		 }
			const count = await Db.update(id, req.body)
			.then(list=>{
				if (list) {
					res.status(200).json(req.body)
				} else {
					res.status(404).json({ message: "The Playlist with the specific name does not exist." })
					}
				})
	} catch (err) {
		res.status(500).json({ error: `there was an error accessing the db: ${err}` });
	}
}
);

//get a user's all playlists

router.get('/:id/playlists', validUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const List = await Db.findPlaylist(id);
    res.status(200).json(List);
  } catch (err) {
    res.status(500).json({ error: `there was an error accessing the db: ${err}` });
  }
}
);

// add a song to a playlist

router.post('/:id/song', async(req, res)=>{
	try {    
		  ///This id is playlist id 
		  const { id } = req.params;
			const playlist = req.body;
			const song = await Db.addSongsToPlaylist(id, playlist);
			console.log("song", song)
			res.status(200).json({Message: song});
	} catch (err) {
			res.status(500).json(err);
	}
	
});
// delete a song from a playlist
router.delete('/:id/song/:songid',
	async (req, res) => {
	  try {
		const response = await Db.removeASongFromPlaylist(req.params.songid);
		console.log(response);
		res.status(200).json({ message: 'the song was removed from playlist' });
	  } catch (err) {
		res.status(500).json({ error: `there was an error removing the song: ${err}` });
	  }
	}
  );

///get all the songs of a playlist By id 

router.get('/:id/songs', validUserId, async (req, res) => {
	try {
		const songs = await Db.getAlltheSongsOfAPlaylist(req.params.id);
		if(songs.length){
			res.status(200).json(songs);
	  } else {
			res.status(400).json({err: 'there are no song in this playlist' } );
		}
	}catch(err){
		console.log(err)
		res.status(500).json({error: 'There is an error '})
	}
});

 // Validate Users Id if exists
 async function validUserId(req, res, next){
  try {
		const {user_id} = req.body;
    const user = await userDb.findById(user_id);
    if (!user) {
      res.status(400).json({ error: 'This Id is not exists' });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
}


module.exports = router;
