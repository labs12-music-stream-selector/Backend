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
		res.status(400).json({message: 'incomplete data'});
		return;
	}
	try {
		let success = 1;
		res.status(201).json(success);
	} catch (error) {
		console.log(error)
		res.status(500).json(error);
	}
});

router.put('/', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
	const {id} = req.params;
	try {
		let res = 1;
		// TODO: delete playlist with id from user
		res.status(200).json(1);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
