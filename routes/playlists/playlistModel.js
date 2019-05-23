const db = require('../../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  updateindex,
  deletePlaylist,
  findPlaylist,
  addSongsToPlaylist,
  removeASongFromPlaylist,
  getAlltheSongsOfAPlaylist,
  removeASongFromPlaylist,
  findUserByPlaylistId
};

async function addSongsToPlaylist(playlist_id,  song){
  const [id] = await db('playlistsongs').insert({playlist_id, song_id: song.song_id, playlist_index: song.playlist_index})
  .returning("id");
  return findBySongId(id);
}

function getAlltheSongsOfAPlaylist(playlist_id) {
  return db('playlistsongs')
  .where({ playlist_id })
  .select('id', 'song_id', 'playlist_index')
}
function removeASongFromPlaylist(id) {
  return db('playlistsongs')
    .where({ id })
    .delete();
}
function findBySongId(id) {
  return db('playlistsongs')
    .where({ id })
    .select('id', 'playlist_id', 'song_id', 'playlist_index')
    .first();
}
function update(id, user) {
  return db('playlists')
    .where('id', Number(id))
    .update(user);
}
function updateindex(id, playlist_index) {
  return db('playlistsongs')
    .where('id', Number(id))
    .update(playlist_index);
}

function deletePlaylist(id) {
  return db('playlists')
    .where({ id })
    .delete()
    
}

function find() {
  return db('playlists').select('id', 'name');
}

function findBy(filter) {
  return db('playlists').where(filter);
}
function findPlaylist(user_id) {
  return db('playlists').where({user_id});
}

async function add(playlist) {
  const [id] = await db('playlists').insert(playlist)
  .returning("id");
  return findById(id);
}

function findById(id) {
  return db('playlists')
    .where({ id })
    .select('id', 'name', 'user_id')
    .first();
}
function findUserByPlaylistId(id) {
  return db('playlists')
    .where({ id })
    .select('user_id')
    .first();
}