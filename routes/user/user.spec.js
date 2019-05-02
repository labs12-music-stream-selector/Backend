const request = require('supertest');
const server = require('../../api/server.js');
const db = require('../../data/dbConfig');
require("dotenv").config();

describe('Register Route', () => {
    describe('GET /api/users', () => {

      it("User DB should return a status 200", async () => {
        const res = await request(server).get('/api/users');
        expect(res.status).toBe(200);
      })
    })
} )
