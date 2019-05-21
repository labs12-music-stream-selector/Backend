const request = require('supertest');
const server = require('../../api/server.js');

describe('Playlists router', () => {
	describe('GET user/playlists', () => {
		it('should return status 200', async () => {
			const res = await request(server).get('/api/user/playlists');
			expect(res.status).toBe(200);
		});

		// it('should return array of playlists', async (done) => {
		// 	const response = await request(server).get('/api/user/playlists');
		// 	console.log(response.body[0]);
		// 	expect(response.body[0]).objectContaining({
		// 		id: expect.any(Number),
		// 		artist: expect.any(String),
		// 		track_title: expect.any(String),
		// 		likes: expect.any(Number),
		// 		comments: expect.any(Number),
		// 		total_plays: expect.any(Number),
		// 		mood: expect.any(String),
		// 		url: expect.any(String)
		// 	});
		// });

		it('should return json', async () => {
			const res = await request(server).get('/api/user/playlists');
			expect(res.type).toBe('application/json');
		});
	});
});