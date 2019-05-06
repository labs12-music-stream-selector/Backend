const request = require('supertest');
const server = require('../../api/server.js');
const login = require('./login-router.js');
const db = require('../../data/dbConfig');
const bcrypt = require('bcryptjs');
require("dotenv").config();

const pass = bcrypt.hashSync('pass', 12);

describe('OAuth login Route', () => {
  describe('GET /api/login/oauth', () => {
    beforeEach(async () => {
      await db('users').truncate();
    })

    it("should return a status 200", async () => {
      user = { name: "testregister", token: "liuahwefliuhawe.awerfihu34tihwef89.239rguweiufh9fnw349thf82398rfh", email: "testinger@tester.com" };
      const id = await db('users').insert(user);
      const res = await request(server).post('/api/login/oauth').send(user);
      expect(res.status).toBe(200);
    })

    it('should return JSON', async () => {
      user = { name: "testregister", token: "liuahwefliuhawe.awerfihu34tihwef89.239rguweiufh9fnw349thf82398rfh", email: "testing@tester.com" };
      const id = await db('users').insert(user);
      return request(server).post('/api/login/oauth').send(user).then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })
})