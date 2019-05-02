const bcrypt = require('bcryptjs')

const testPass = bcrypt.hashSync('testing', 12)

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      name: 'Kawsar',
      email: 'happygirl@yahoo.com',
      patreon_support: false
    },
    {
      name: 'animeFan',
      email: 'animefan@yahoo.com',
      patreon_support: false
    },
    {
      name: 'worldwideHandsome',
      email: 'handsome@yahoo.com',
      patreon_support: false
    },
    {
      name: 'over9000',
      email: 'over9000@gmail.com',
      patreon_support: false
    },
    {
      name: 'dancingMachine',
      email: 'dancingmachine@yahoo.com',
      patreon_support: false
    },
    {
      name: 'bigvinaMac',
      email: 'bigvinamac@yahoo.com',
      patreon_support: false
    },
    {
      name: 'TripleH',
      email: 'tripleh@gmail.com',
      patreon_support: false
    },
    {
      name: 'hipHopFan',
      email: 'hiphopfan@gmail.com',
      patreon_support: false
    },
    {
      name: 'Moonwalker',
      email: 'moonwalker@gmail.com',
      patreon_support: false
    },
    {
      name: 'BTSStan',
      email: 'btsstan@gmail.com',
      patreon_support: false
    }
  ])

};
