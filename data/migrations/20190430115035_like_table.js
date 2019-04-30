exports.up = function(knex) {
    return knex.schema.createTable("likes", like => {
      like.increments("id");  
      like.integer("likes").references('id').inTable("songs");
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("likes");
};
  