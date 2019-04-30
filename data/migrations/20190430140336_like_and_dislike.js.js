
exports.up = function(knex, Promise) {
  return knex.schema.createTable("like_and_dislike", tbl => {
    tbl.increments()
    tbl.integer("likes").references("id").inTable("songs")
    tbl.integer("dislikes").references("id").inTable("songs")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("like_and_dislike")
};
