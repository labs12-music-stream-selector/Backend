
exports.up = function(knex, Promise) {
    return knex.schema.createTable('userplaylists', tbl=>{
        tbl.increments("id");
        tbl.integer("user_id").references("id").inTable("users")
        tbl.string("playlist").references("id").inTable("playlists")
        tbl.string("newplaylist").references("id").inTable("playlistsongs")  
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("userplaylists");
};
