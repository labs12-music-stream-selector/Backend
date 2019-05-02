
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { artist: 'Brandon Jonak & Pep.B', track_title: 'Brandon Jonak & Pep.B - Where Do I Go', likes: 379, comments: 41, total_plays: 72600, mood: "In - Love", url: "https://www.youtube.com/watch?v=Vrd8uDWRmx0" },
        { artist: 'Jingle Punks', track_title: 'Jingle Punks - Skull Fire', likes: 42, comments: 2, total_plays: 6234, mood: "Happy", url: 'https://www.youtube.com/watch?v=OtRQeYvrIU0' },
        { artist: 'Lord Of The Rings', track_title: 'Lord Of The Rings - Hobbit Theme', likes: 136, comments: 11, total_plays: 31300, mood: "Happy", url: 'https://www.youtube.com/watch?v=OtRQeYvrIU0' },
        { artist: 'Jo Cohen & Sex Whales', track_title: 'Jo Cohen & Sex Whales - Run Away(feat.Lusil)', likes: 136, comments: 11, total_plays: 31300, mood: "Happy", url: 'https://www.youtube.com/watch?v=wHHSN6tdeZI' },
        { artist: 'Klave', track_title: 'Klave - Realer Than Love(feat.Francis)', likes: 367, comments: 28, total_plays: 50600, mood: "In - Love", url: 'https://www.youtube.com/watch?v=MZ5bl5ipjKs' },
        { artist: 'Sad Piano Ambient', track_title: 'Sad Piano Ambient - FREE Background Music', likes: 273, comments: 13, total_plays: 46500, mood: "Sad", url: 'https://www.youtube.com/watch?v=HI7egq3SnIA' },
        { artist: 'Whales & Ggnoaa', track_title: 'Whales & Ggnoaa - Paranoia', likes: 21, comments: 1, total_plays: 2641, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=y_oYnDqYPtw' },
        { artist: 'REGGAE MUSIC', track_title: 'REGGAE MUSIC - Hip Hop Upbeat Anticipation', likes: 16, comments: 2, total_plays: 1750, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=AqD56kpet-E' },
        { artist: 'Otis McDonald', track_title: 'Otis McDonald - TREAT ME THIS WAY', likes: 13, comments: 1, total_plays: 993, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=SP8pbfIhjtQ' },
        { artist: 'TASTE HONEY', track_title: 'TASTE HONEY - CHILL HIP HOP INSTRUMENTAL', likes: 120, comments: 7, total_plays: 4316, mood: "In - Love", url: 'https://www.youtube.com/watch?v=u1VzCulhviI' },
        { artist: 'FEELING GOOD', track_title: 'FEELING GOOD - SUMMER VIBES HIP HOP INSTRUMENTAL', likes: 88, comments: 6, total_plays: 3376, mood: "Peaceful", url: 'https://www.youtube.com/watch?v=6IxT8_8T4P4' },
        { artist: 'Epic Hip Hop', track_title: 'Epic Hip Hop - Cool Cinematic & Gaming Background Music Instrumental', likes: 124, comments: 5, total_plays: 3490, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=t0YBFBDM4Cg' },
        { artist: 'Manana es Mejor', track_title: 'Manana es Mejor - Flow Latino - Hip Hop Instrumental', likes: 77, comments: 4, total_plays: 4608, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=YI13UPagCa8' },
        { artist: 'Goblins From Mars', track_title: 'Goblins From Mars - Enough', likes: 698, comments: 42, total_plays: 102000, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=A5GOUQ9l66g' },
        { artist: 'Goblins From Mars', track_title: 'Goblins From Mars - Somewhere', likes: 187, comments: 5, total_plays: 43600, mood: "Angry", url: 'https://www.youtube.com/watch?v=2JcH7X8JtNY' },
        { artist: 'Desmeon', track_title: 'Desmeon - Undone', likes: 149, comments: 2, total_plays: 43300, mood: "Sad", url: 'https://www.youtube.com/watch?v=0E6KXgWuaHo' },
        { artist: 'Anevo', track_title: 'Anevo - Waiting On Your Call', likes: 154, comments: 0, total_plays: 39600, mood: "In - Love", url: 'https://www.youtube.com/watch?v=mkgl_f-DpXc' },
        { artist: 'Major Lazer', track_title: 'Major Lazer - Christmas Trees(feat.Protoje)', likes: 107, comments: 3, total_plays: 36000, mood: "Happy", url: 'https://www.youtube.com/watch?v=ZgTpZ7YlHKc,https://www.youtube.com/watch?v=ZgTpZ7YlHKc' },
        { artist: 'Kranky', track_title: 'Kranky - stars of the lid "december hunting for vegetarian fuckface"', likes: 769, comments: 14, total_plays: 37200, mood: "Peaceful", url: 'https://www.youtube.com/watch?v=5fRk1PgBbR0' },
        { artist: 'NCFR', track_title: 'NCFR - Connections', likes: 1, comments: 0, total_plays: 754, mood: "Happy", url: 'https://www.youtube.com/watch?v=gQQ46faP9R4' },
        { artist: 'NCFR', track_title: 'NCFR - Adventures A - himitsu', likes: 60, comments: 0, total_plays: 6793, mood: "Happy", url: 'https://www.youtube.com/watch?v=MkNeIUgNPQ8' },
        { artist: 'Clarx', track_title: 'Clarx - Bones', likes: 2204, comments: 49, total_plays: 95200, mood: "Angry", url: 'https://www.youtube.com/watch?v=8Tu0lcl75yg' },
        { artist: 'Waysons', track_title: 'Waysons - Eternal Minds', likes: 13500, comments: 286, total_plays: 1400000, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=ZhECyz85FMc' },
        { artist: 'Distrion & Electro - Light', track_title: 'Distrion & Electro - Light - Drakkar', likes: 539, comments: 14, total_plays: 28400, mood: "Happy", url: 'https://www.youtube.com/watch?v=YJTae5ScvQA' },
        { artist: 'Slokix', track_title: 'Slokix - Big Smoke', likes: 68, comments: 11, total_plays: 5097, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=9kzY4JgfOUE' },
        { artist: 'LiQWYD', track_title: 'LiQWYD - Take It Easy', likes: 105, comments: 5, total_plays: 5750, mood: "Peaceful", url: 'https://www.youtube.com/watch?v=nrIWx67pGXA' },
        { artist: 'LiQWYD', track_title: 'LiQWYD - With You', likes: 125, comments: 8, total_plays: 4821, mood: "Happy", url: 'https://www.youtube.com/watch?v=a8MrgGTdkeI' },
        { artist: 'MBB', track_title: 'MBB - Clouds', likes: 1880, comments: 148, total_plays: 20786, mood: "Happy", url: 'https://www.youtube.com/watch?v=CmG7wrhaKko' },
        { artist: 'Artegon', track_title: 'Artegon - Bad Bounce', likes: 23, comments: 3, total_plays: 2145, mood: "Angry", url: 'https://www.youtube.com/watch?v=s97CXEK_H4k' },
        { artist: 'Tranquil', track_title: 'Tranquil - Past the High Road', likes: 15, comments: 0, total_plays: 1629, mood: "Heartbroken", url: 'https://www.youtube.com/watch?v=TQy7YlW9sdk' },
        { artist: 'Scandinavianz', track_title: 'Scandinavianz - Atlantis', likes: 1981, comments: 912, total_plays: 14443, mood: "Peaceful", url: 'https://www.youtube.com/watch?v=CtRZOngDavo' },
        { artist: 'SHWMM', track_title: 'SHWMM - A Peaceful Journey', likes: 7, comments: 0, total_plays: 502, mood: "Peaceful", url: 'https://www.youtube.com/watch?v=-XCcrYIZF6M' },
        { artist: 'Abstract Corporate', track_title: 'Abstract Corporate - Gribsound', likes: 18, comments: 0, total_plays: 855, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=C_Vl_CfVx_s' },
        { artist: 'EQuinonez', track_title: 'EQuinonez - Moshi Moshi', likes: 21, comments: 1, total_plays: 833, mood: "Happy", url: 'https://www.youtube.com/watch?v=-x-0de8e4PI' },
        { artist: 'Mona Wonderlick', track_title: 'Mona Wonderlick - Keep On', likes: 6, comments: 0, total_plays: 725, mood: "Happy", url: 'https://www.youtube.com/watch?v=gIZatXc_jGo' },
        { artist: 'Madbello', track_title: 'Madbello - Floating Through Time', likes: 9, comments: 0, total_plays: 1664, mood: "Peaceful", url: 'https://www.youtube.com/watch?v=lkrVgGoEMkU' },
        { artist: 'Noise Badger', track_title: 'Noise Badger - Explore', likes: 38, comments: 8, total_plays: 1549, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=XvVPYeCAycE' },
        { artist: 'CBosko', track_title: 'CBosko - See the skies', likes: 19, comments: 1, total_plays: 2071, mood: "Heartbroken", url: 'https://www.youtube.com/watch?v=608DgUY_yw4' },
        { artist: 'DM Galaxy', track_title: 'DM Galaxy - Etiquette', likes: 4742, comments: 351, total_plays: 158000, mood: "Happy", url: 'https://www.youtube.com/watch?v=ZD_Urg9fOs0' },
        { artist: 'AShamaluevMusic', track_title: 'AShamaluevMusic - Sad Emotional Piano and Nostalgic Cinematic Background Music', likes: 273, comments: 2, total_plays: 47200, mood: "Sad", url: 'https://www.youtube.com/watch?v=Whse3rKLRC0' },
        { artist: 'AShamaluevMusic', track_title: 'AShamuluevMusic - Beautiful Dawn', likes: 329, comments: 15, total_plays: 60900, mood: "Sad", url: 'https://www.youtube.com/watch?v=51JF2421VWo' },
        { artist: 'Ship Wrek', track_title: 'Ship Wrek - Pain', likes: 154, comments: 7539, total_plays: 7830000, mood: "Heartbroken", url: 'https://www.youtube.com/watch?v=UDEpRK8WL_I' },
        { artist: 'Krys Talk', track_title: 'Krys Talk - Fly Away', likes: 1358, comments: 83, total_plays: 75700, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=LfDfb-87F_s' },
        { artist: 'Blure & Skyvoice', track_title: 'Blure & Skyvoice - Faith DM Galaxy Remix', likes: 1028, comments: 62, total_plays: 37600, mood: "Peaceful", url: 'https://www.youtube.com/watch?v=NiSebX6N7LQ' },
        { artist: 'Breno', track_title: 'Breno - The Fall', likes: 1062, comments: 67, total_plays: 79500, mood: "Happy", url: 'https://www.youtube.com/watch?v=Y6BPfZ94C3k' },
        { artist: 'Typical', track_title: 'Typical - Heroes', likes: 40, comments: 0, total_plays: 2743, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=LQ1D_GCvL2E' },
        { artist: 'Janji', track_title: 'Janji ft.Johnning - Heroes Tonight', likes: 28, comments: 1, total_plays: 2043, mood: " Confident - sassy", url: 'https://www.youtube.com/watch?v=3nQNiWdeH2Q' },
        { artist: 'Daenine', track_title: 'Daenine ft.GoldAN - Target Finder', likes: 14, comments: 1, total_plays: 1345, mood: "Angry", url: 'https://www.youtube.com/watch?v=GEvgku31N_M' },
        { artist: 'Raven & Kreyn', track_title: 'Raven & Kreyn - In The Air', likes: 14, comments: 1, total_plays: 1345, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=63kmMcHBQlA' },
        { artist: 'Jim Yosef', track_title: 'Jim Yosef(feat.Anna Yvette) - Cant Wait', likes: 32, comments: 0, total_plays: 2287, mood: "In-Love", url: 'https://www.youtube.com/MqUCDzom5Xw' },
        { artist: 'Wowa', track_title: 'Wowa - Piratos', likes: 199, comments: 13, total_plays: 32729, mood: "Angry", url: 'https://www.youtube.com/watch?v=qOCEAll2m8k' },
        { artist: 'Romen Jewels', track_title: 'Romen Jewels - In The City', likes: 50, comments: 1, total_plays: 1706, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=2prNA7zahZs' },
        { artist: 'K.M.Beats', track_title: 'K.M.Beats - Sad Trap Beat', likes: 8, comments: 1, total_plays: 187, mood: "Sad", url: 'https://www.youtube.com/watch?v=ryRfErVDGCk' },
        { artist: 'Bro Safari & Space Laces', track_title: 'Bro Safari & Space Laces - Fang Banger', likes: 7867, comments: 610, total_plays: 332471, mood: "Angry", url: 'https://www.youtube.com/watch?v=RLLJYpk_KDE' },
        { artist: 'Donny Hathaway', track_title: 'Donny Hathaway - The Ghetto', likes: 8871, comments: 553, total_plays: 408795, mood: "Happy", url: 'https://www.youtube.com/watch?v=OqZ2JBVXgpA' },
        { artist: 'Matt Byron', track_title: 'Matt Byron - Sleep and Dream of Monsters', likes: 1058, comments: 271, total_plays: 23521, mood: "Angry", url: 'https://www.youtube.com/watch?v=-kgPMzuiWFc' },
        { artist: 'Axwell Ingrosso', track_title: 'Axwell Ingrosso - More Than You Know', likes: 69924, comments: 136, total_plays: 5051214, mood: "Happy", url: 'https://www.youtube.com/watch?v=GsF05B8TFWg' },
        { artist: 'BEAUZ & Momo', track_title: 'BEAUZ & Momo - Wont Look Back', likes: 9, comments: 0, total_plays: 129, mood: "Happy", url: 'https://www.youtube.com/watch?v=HbYXIMFDoRg' },
        { artist: 'Martin Garrix', track_title: 'Martin Garrix - Proxy', likes: 178944, comments: 8838, total_plays: 9601851, mood: "Happy", url: 'https://www.youtube.com/watch?v=NWB6-PJw4Mk' },
        { artist: 'Virtual Riot', track_title: 'Virtual Riot - Mitten Is Angry', likes: 12551, comments: 855, total_plays: 588755, mood: "Happy", url: 'https://www.youtube.com/watch?v=6qPYAI5iYvI' },
        { artist: 'Russ', track_title: 'Russ - I Dont Know How To Stop Being Turnt Like This(Feat.Squire & Seba)', likes: 25467, comments: 105, total_plays: 1799805, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=79_pPzp4tJU' },
        { artist: 'Vexento', track_title: 'Vexento - We Are One', likes: 5657, comments: 400, total_plays: 337000, mood: "Happy", url: 'https://www.youtube.com/watch?v=Ssvu2yncgWU' },
        { artist: 'MBB', track_title: 'MBB - Good Vibes', likes: 5889, comments: 2000, total_plays: 40212, mood: "Happy", url: 'https://www.youtube.com/watch?v=0ODLEQKT6xY' },
        { artist: 'Jarico', track_title: 'Jarico - Island', likes: 1365, comments: 58, total_plays: 62550, mood: "Peaceful", url: 'Peaceful' },
        { artist: 'FortyThr33', track_title: 'FortyThr33 - Bay Breeze', likes: 6838, comments: 3099, total_plays: 210950, mood: "Happy", url: 'https://www.youtube.com/watch?v=XER8Zg0ExKU' },
        { artist: 'Reatch', track_title: 'Reatch - Funk City', likes: 2080, comments: 814, total_plays: 57681, mood: "Confident - sassy", url: 'https://www.youtube.com/watch?v=J5JZNdb50B8' },
        { artist: 'A Himatsu', track_title: 'A Himatsu - Lost Within', likes: 2353, comments: 82, total_plays: 135881, mood: "Sad", url: 'https://www.youtube.com/watch?v=6WQjgHuUDWU' },
        { artist: 'MBB', track_title: 'MBB - Island', likes: 25151, comments: 224, total_plays: 223771, mood: "Happy", url: 'https://www.youtube.com/watch?v=0fLMSubepkY' },
      ]);
    });
};

// DS Database looks like:
// Artist
// song
// likes
// comments
// total plays
// mood
// youtube url
// video_id
// embed code

