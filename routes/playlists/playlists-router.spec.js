const request = require('supertest');
const server = require('../../api/server.js');

const url = '/api/user/playlists'; 

describe('Playlists router', () => {
	describe('GET user/playlists', () => {
		it('should return status 200', async () => {
			const res = await request(server).get(url);
			expect(res.status).toBe(200);
		});

		it('should return array of playlists', (done) => {
			return request(server).get(url)
				.expect([], done);
		});

		it('should return json', async () => {
			const res = await request(server).get(url);
			expect(res.type).toBe('application/json');
		});
	});

	describe('POST /', () => {
		it('should return status 201', async () => {
			const res = await request(server).post(url).send({
				userId: 1,
				playlistName: 'Gaming Stream'
			});
			expect(res.status).toBe(201);
		});

		it('should return json', async () => {
				const res = await request(server).post(url).send({
				userId: 1,
				playlistName: 'Gaming Stream'
			});
				expect(res.type).toBe('application/json');
			});
	});

	describe('PUT /', () => {
		it('should return status 200', async () => {
			const res = await request(server).put(url).send({
				userId: 1,
				playlistName: 'Gaming Stream'
			});
			expect(res.status).toBe(200);
		});

		it('should return json', async () => {
				const res = await request(server).put(url).send({
				userId: 1,
				playlistName: 'Gaming Stream'
			});
				expect(res.type).toBe('application/json');
			});
	});
});