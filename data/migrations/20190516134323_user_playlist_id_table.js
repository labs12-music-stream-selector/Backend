
exports.up = function(knex, Promise) {
    return knex.schema.createTable('userplaylists', tbl=>{
        tbl.increments("id");
        tbl.integer("user_id").refrences("id").inTable("users")
        tbl.string("playlist").refrences("id").inTable("playlists")
        tbl.string("newplaylist").refrences("id").inTable("playlistsongs")  
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("userplaylists");
};
