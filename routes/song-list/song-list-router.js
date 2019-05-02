const router = require('express').Router();
const db = require('../../data/dbConfig.js')

router.get('/', async (req, res) => {
  const songs = await db('songs').returning('id', 'artist', 'track_title', 'likes', 'comments', 'total_plays', 'mood', 'url')
  res.status(200).json(songs);
})

module.exports = router;
