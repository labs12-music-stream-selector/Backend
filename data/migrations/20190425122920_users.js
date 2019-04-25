exports.up = function(knex) {
  return knex.schema.createTable("users", user => {
    user.increments();

    user
      .string("username", 128)
      .notNullable()
      .unique();

    user.string("password").notNullable();

    user.string("email", 128).unique();

    user.boolean("patreon_support").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
