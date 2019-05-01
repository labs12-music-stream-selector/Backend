const router = require('express').Router();
// const playlists = require('../../data/helpers/playlists') //implement helpers

const db = require('../../data/dbConfig.js')

router.get('/', (req, res) => {
	db('songs').then(response => {
		res.status(200).json(response)
	}).catch(err => {
		res.status(500).json(err)
	})
})

// router.get('/', async (req, res) => {
// 	console.log('called');
// 	try {
// 		let playlists = [];
// 		//playlists = await
// 		res.status(200).json(playlists);
// 	} catch (error) {
// 		res.status(500).json(error);
// 	}
// });

router.post('/', (req, res) => {
	const {
		track_length,
		track_title,
		genre,
		description,
		artist,
		mood
	} = req.body

	if(!track_length || !track_title || !genre || !description || !artist || !mood) {
		res.status(404).json({ message: 'Fill in all of the fields' })
	} else {
		db('songs').insert({ track_length, track_title, genre, description, artist, mood })
			.then(song => {
				res.status(201).json({ message: 'Song has been created' })
			}).catch(err => {
				res.status(500).json({ message: 'Internal server error. Try again.' })
			})
	}
})

router.delete('/:id', (req, res) => {
	db('songs').where({id: req.params.id})
		.del()
		.then(song => {
			if(song) {
				res.status(204).json(song)
			} else {
				res.status(404).json({ message: 'Song cannot be deleted.' })
			}
		}).catch(err => {
			res.status(500).json(err)
		})
})

module.exports = router;
