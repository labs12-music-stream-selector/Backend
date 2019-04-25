const bcrypt = require('bcryptjs')

const testPass = bcrypt.hashSync('testing', 12)

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username: 'happyGirl',
      password: testPass,
      email: 'happygirl@yahoo.com',
      patreon_support: false
    },
    {
      username: 'animeFan',
      password: testPass,
      email: 'animefan@yahoo.com',
      patreon_support: false
    },
    {
      username: 'worldwideHandsome',
      password: testPass,
      email: 'handsome@yahoo.com',
      patreon_support: false
    },
    {
      username: 'over9000',
      password: testPass,
      email: 'over9000@gmail.com',
      patreon_support: false
    },
    {
      username: 'dancingMachine',
      password: testPass,
      email: 'dancingmachine@yahoo.com',
      patreon_support: false
    },
    {
      username: 'bigvinaMac',
      password: testPass,
      email: 'bigvinamac@yahoo.com',
      patreon_support: false
    },
    {
      username: 'TripleH',
      password: testPass,
      email: 'tripleh@gmail.com',
      patreon_support: false
    },
    {
      username: 'hipHopFan',
      password: testPass,
      email: 'hiphopfan@gmail.com',
      patreon_support: false
    },
    {
      username: 'Moonwalker',
      password: testPass,
      email: 'moonwalker@gmail.com',
      patreon_support: false
    },
    {
      username: 'BTSStan',
      password: testPass,
      email: 'btsstan@gmail.com',
      patreon_support: false
    }
  ])

};
