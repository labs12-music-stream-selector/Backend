
exports.up = function(knex, Promise) {
    return knex.schema.createTable('playlists', tbl=>{
        tbl.increments("id");
        tbl.string("name")
        tbl.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("playlists");
};
