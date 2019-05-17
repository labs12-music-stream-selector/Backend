
exports.up = function(knex, Promise) {
    return knex.schema.createTable('playlistsongs', tbl=>{
        tbl.increments("id")
        tbl.integer("playlist_id").references("id").inTable("playlists").onDelete('CASCADE');
        tbl.string("song_id")
        tbl.integer("playlist_index")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("playlistsongs");
};
