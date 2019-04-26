const request = require('supertest');
const server = require('../../api/server.js');
const register = require('./register-router.js');
const db = require('../../data/dbConfig');
const bcrypt = require('bcryptjs');
require("dotenv").config();

describe('Register Route', () => {
  describe('GET /api/register', () => {
    beforeAll(async () => {
      await db('users').truncate();
    })

    it("no user in DB should return a status 400", async () => {
      const res = await request(server).post('/api/register').send({ username: "testregister", password: "pass" });
      expect(res.status).toBe(400);
    })

    it("User in DB w/ correct username and pass should return a status 200", async () => {
      await db('users').insert({ username: "testregister", password: "pass", email: "testing@tester.com" })
      const res = await request(server).post('/api/register').send({ username: "testregister", password: "pass" });
      expect(res.status).toBe(400);
    })

    it("No username should return a status 400", async () => {
      const res = await request(server).post('/api/register').send({ username: "", password: "pass" });
      expect(res.status).toBe(400);
    })

    it("No password should return a status 400", async () => {
      const res = await request(server).post('/api/register').send({ username: "testregister", password: "" });
      expect(res.status).toBe(400);
    })

    it('should return JSON', () => {
      return request(server).post('/api/register').send({ username: 'testregister', password: 'pass' }).then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })
})