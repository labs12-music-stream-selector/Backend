exports.up = function(knex) {
    return knex.schema.createTable("dislikes", like => {
      like.increments("id");  
      like.integer("dislikes").references('id').inTable("songs");
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dislikes");
};
  