const router = require('express').Router();
// const playlists = require('../../data/helpers/playlists') //implement helpers

router.get('/', async (req, res) => {
	console.log('called');
	try {
		let playlists = [];
		//playlists = await 
		res.status(200).json(playlists);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post('/', async (req, res) => {
	const {userId, playlistName} = req.body;
	if(!userId || !playlistName){
		res.status(400).json({message: 'incomplete data'})
	}
	try {
		let res = 1;
		// TODO: Create new playlist for user
		res.status(200).json(1);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.PUT('/', async (req, res) => {
	const {userId, playlistName} = req.body;
	if(!userId || !playlistName){
		res.status(400).json({message: 'incomplete data'})
	}
	try {
		let res = 1;
		// TODO: update playlist for user
		res.status(200).json(1);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
