const request = require('supertest');
const server = require('../../api/server.js');
const login = require('./login-router.js');
const db = require('../../data/dbConfig');
const bcrypt = require('bcryptjs');
require("dotenv").config();

const pass = bcrypt.hashSync('pass', 12);

describe('Login Route', () => {
  describe('GET /api/login', () => {
    beforeEach(async () => {
      await db('users').truncate();
    })

    it("should return a status 200", async () => {
      await db('users').insert({ username: "testregister", password: pass, email: "testing@tester.com" })
      const res = await request(server).post('/api/login').send({ username: "testregister", password: "pass" });
      expect(res.status).toBe(200);
    })

    it('should return JSON', () => {
      return request(server).post('/api/login').send({ username: 'testregister', password: 'pass' }).then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })
})