const router = require('express').Router();
// const playlists = require('../../data/helpers/playlists') //implement helpers

router.get('/api/user/playlists', async (req, res) => {
	try {
		let playlists = [];
		//playlists = await 
		res.status(200).json(playlists);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;