exports.up = function(knex) {
    return knex.schema.createTable("dislikes", dislike => {
      dislike.increments("id");  
      dislike.integer("dislikes").references('id').inTable("songs");
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dislikes");
};
  