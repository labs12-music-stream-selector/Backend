const router = require('express').Router();
const db = require('../../data/dbConfig.js')
const Db = require('./playlistModel.js');

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
router.post('/', async (req, res) => {
	try {
	  let name = req.body;
	  const existingPlaylist = await db('playlists').where({ 'name': name }).first();
	  if (existingPlaylist) {
		return res.status(200).json({ message: "Please try a different playlist name"  });
	  } else {
		const [id] = await db('playlists').insert(name).returning("id");
		if (id) {
		  return res.status(201).json({meassge: "Playlist has created", id, name});
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

// router.post('/', (req, res) => {
// 	const {
// 		artist,
// 		track_title,
// 		likes,
// 		comments,
// 		total_plays,
// 		mood,
// 		url

// 	} = req.body

// 	if(!artist || !track_title || !likes || !comments || !total_plays || !mood || !url) {
// 		res.status(404).json({ message: 'Fill in all of the fields' })
// 	} else {
// 		db('songs').insert({ artist, track_title, likes, comments, total_plays, mood, url })
// 			.then(song => {
// 				res.status(201).json({ message: 'Song has been created' })
// 			}).catch(err => {
// 				res.status(500).json({ message: 'Internal server error. Try again.' })
// 			})
// 	}
// })


module.exports = router;
