const db = require('../../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  deletePlaylist,
};

function update(id, user) {
  return db('playlists')
    .where('id', Number(id))
    .update(user);
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

async function add(playlist) {
  const [id] = await db('playlists').insert(playlist)
  .returning("id");
  return findById(id);
}

function findById(id) {
  return db('playlists')
    .where({ id })
    .select('id', 'name')
    .first();
}