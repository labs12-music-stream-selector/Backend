const db = require('../../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findBytoken,
  update,
  deleteUser,
};

function update(id, user) {
  return db('users')
    .where('id', Number(id))
    .update(user);
}

function deleteUser(id) {
  return db('users')
    .where({ id })
    .delete()
    
}

function find() {
  return db('users').select('id', 'name', 'email');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user)
  .returning("id");
  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .select('id', 'name', 'email')
    .first();
}

async function findBytoken(token) {
  return db('users')
    .where({token})
    .select('id')
    .first();
}