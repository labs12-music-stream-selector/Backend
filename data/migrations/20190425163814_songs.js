exports.up = function (knex, Promise) {
  return knex.schema.createTable('songs', song => {
    song.increments("id");

    song.string('artist').notNullable();
    song.string('track_title').notNullable();
    song.integer('likes').notNullable();
    song.integer('comments').notNullable();
    song.integer('total_plays').notNullable();
    song.string('mood').notNullable();
    song.string('url').notNullable();
    song.string('video_id');
  })
};

exports.down = function (knex, Promise) {

};
