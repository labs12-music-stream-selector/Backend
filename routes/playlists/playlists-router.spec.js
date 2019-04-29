const request = require('supertest');
const server = require('../../api/server.js');

describe('Playlists router', () => {
	describe('GET user/playlists', () => {
		it('should return status 200', async () => {
			const res = await request(server).get('/api/user/playlists');
			expect(res.status).toBe(200);
		});

		it('should return array of playlists', (done) => {
			return request(server).get('/api/user/playlists')
				.expect([], done);
		});

		it('should return json', async () => {
			const res = await request(server).get('/api/user/playlists');
			expect(res.type).toBe('application/json');
		});
	});
});