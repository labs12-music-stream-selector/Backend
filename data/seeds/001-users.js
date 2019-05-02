const bcrypt = require('bcryptjs')

const testPass = bcrypt.hashSync('testing', 12)

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      name: 'Kawsar',
      email: 'happygirl@yahoo.com',
    },
    {
      name: 'animeFan',
      email: 'animefan@yahoo.com',
    },
    {
      name: 'worldwideHandsome',
      email: 'handsome@yahoo.com',
    },
    {
      name: 'over9000',
      email: 'over9000@gmail.com',
    },
    {
      name: 'dancingMachine',
      email: 'dancingmachine@yahoo.com',
    },
    {
      name: 'bigvinaMac',
      email: 'bigvinamac@yahoo.com',
    },
    {
      name: 'TripleH',
      email: 'tripleh@gmail.com',
    },
    {
      name: 'hipHopFan',
      email: 'hiphopfan@gmail.com',
    },
    {
      name: 'Moonwalker',
      email: 'moonwalker@gmail.com',
    },
    {
      name: 'BTSStan',
      email: 'btsstan@gmail.com',
    }
  ])

};
