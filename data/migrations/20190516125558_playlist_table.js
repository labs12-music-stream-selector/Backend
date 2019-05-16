
exports.up = function(knex, Promise) {
    return knex.schema.createTable('playlists', tbl=>{
        tbl.increments("id");
        tbl.string("name")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("playlists");
};
