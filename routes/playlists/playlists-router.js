const router = require('express').Router();
const db = require('../../data/dbConfig.js')
const Db = require('./playlistModel.js');
const {authenticate, validUser,validUserId, checkForPlaylistOwner, specialpermission}= require ('../../auth/auth.js');

// get All the playlist
//Protected
router.get('/',specialpermission, async (req, res) => {
	await Db.find()
			.then(play => {
					res.json(play);
			})
			.catch(err => {
					res.status(500).send(err);
			})
});
//Get a playlist by Id
//Protected
router.get('/:id',authenticate, checkForPlaylistOwner, async(req, res)=>{
	try{
			const playlist = await Db.findById(req.params.id);
			res.status(200).json(playlist);
	}catch (err){
			res.status(500).json({ error: `there was an error: ${err}` });
	}
});
// Post a new playlist
//Protected
router.post('/', authenticate, validUserId, validUser, async (req, res) => {
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
//Protected
router.delete('/:id',authenticate, checkForPlaylistOwner, (req, res) => {
	try{
			db('playlists').where({id: req.params.id})
				.del().then(list => {
					if(list) {
						res.status(200).json({message: " This Playlist is deleted successfully" });
					} else {
						res.status(404).json({ message: 'This id of Playlist never exists.' })
					}
				})
	}catch(err) {
					res.status(500).json({error: err })
	}
})
// update a playlist
//Protected
router.put('/:id',authenticate,checkForPlaylistOwner,  async (req, res) => {
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
//Protected
router.get('/:id/playlists',authenticate, validUser, async (req, res) => {
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
//Protected
router.post('/:id/song',authenticate, checkForPlaylistOwner, async(req, res)=>{
	try {    
		  ///This id is playlist id 
			const { id } = req.params;
			const playlistdata = req.body;
			const {playlist, playlist_index} = playlistdata;
			console.log(playlistdata);
			const song = await Db.addSongsToPlaylist(id, playlistdata);
			res.status(200).json({Message: song});
	} catch (err) {
			res.status(500).json(err);
	}
	
});

// Remove a song from a playlist
//Protected
router.delete('/:id/song/:songid',authenticate, checkForPlaylistOwner, async (req, res) => {
	  try {
		const response = await Db.removeASongFromPlaylist(req.params.songid);
				if(response ===0 || response != 1){
						res.status(404).json({ message: 'There no song in the playlist with this id' });
				}else{
						res.status(200).json({ message: 'The requested song is removed from the playlist successfully' });
				}
	  } catch (err) {
		res.status(500).json({ error: `there was an error removing the song: ${err}` });
	  }
	}
	);
	
// update a song's index  of a playlist
//Protected
router.put('/:id/song/:songid',authenticate,checkForPlaylistOwner, async (req, res) => {
	try {
			const {playlist_index} = req.body;
			const id =req.params.songid;
			if (!playlist_index) {
				res.status(400).json({ message: "Please provide a index number" })
		  } else {
					await Db.updateindex(id, req.body)
						.then(list=>{
								if (list) {
									const updatedIndex =  playlist_index;
									res.status(200).json({message: "Song index updated successfully", updatedIndex })
								} else {
									res.status(404).json({ message: "The Song with the specific id does not exist." })
								}
						})
			}
	} catch (err) {
		res.status(500).json({ error: `there was an error accessing the db: ${err}` });
	}
}
);

///get all the songs of a playlist By id 
//Protected
router.get('/:id/songs',authenticate,checkForPlaylistOwner, async (req, res) => {
	try {
		const songs = await Db.getAlltheSongsOfAPlaylist(req.params.id);
		if(songs.length){
			res.status(200).json(songs);
	  } else {
			let arr =[];
			res.status(200).json(arr);
		}
	}catch(err){
		console.log(err)
		res.status(500).json({error: 'There is an error '})
	}
});

module.exports = router;
