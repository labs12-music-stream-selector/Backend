const request = require('supertest');
const server = require('../../api/server.js');
const db = require('../../data/dbConfig');
require("dotenv").config();


describe('Songs Route', () => {
  describe('GET /api/login', () => {

    it("should return a status 200", async () => {
      const response = await request(server).get('/api/song-list')
      // .send({ username: "testregister", password: "pass" });
      expect(response.status).toBe(200);
    })

    it('should return JSON', async () => {
      const response = await request(server).get('/api/song-list')
      // .send({ username: 'testregister', password: 'pass' }).then(res => {
      expect(response.type).toBe('application/json')
    })
  })
})