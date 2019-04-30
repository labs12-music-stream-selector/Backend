const router = require('express').Router();
// const playlists = require('../../data/helpers/playlists') //implement helpers

const db = require('../data/dbConfig.js')

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


module.exports = router;
