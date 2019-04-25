
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username: 'happyGirl',
      password: 'testing',
      email: 'happygirl@yahoo.com',
      patreon_support: false
    },
    {
      username: 'animeFan',
      password: 'testing',
      email: 'animefan@yahoo.com',
      patreon_support: false
    },
    {
      username: 'worldwideHandsome',
      password: 'testing',
      email: 'handsome@yahoo.com',
      patreon_support: false
    },
    {
      username: 'over9000',
      password: 'testing',
      email: 'over9000@gmail.com',
      patreon_support: false
    },
    {
      username: 'dancingMachine',
      password: 'testing',
      email: 'dancingmachine@yahoo.com',
      patreon_support: false
    },
    {
      username: 'bigvinaMac',
      password: 'testing',
      email: 'bigvinamac@yahoo.com',
      patreon_support: false
    },
    {
      username: 'TripleH',
      password: 'testing',
      email: 'tripleh@gmail.com',
      patreon_support: false
    },
    {
      username: 'hipHopFan',
      password: 'testing',
      email: 'hiphopfan@gmail.com',
      patreon_support: false
    },
    {
      username: 'Moonwalker',
      password: 'testing',
      email: 'moonwalker@gmail.com',
      patreon_support: false
    },
    {
      username: 'BTSStan',
      password: 'testing',
      email: 'btsstan@gmail.com',
      patreon_support: false
    }
  ])

};
