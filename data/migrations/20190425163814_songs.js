
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', song => {
    song.increments()

    song.time('track_length').notNullable()
    song.string('track_title').notNullable()
    song.string('genre').notNullable()
    song.string('description').notNullable()
    song.string('artist').notNullable()
    song.string('mood').notNullable()

  })
};

exports.down = function(knex, Promise) {

};
