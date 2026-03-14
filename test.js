const app = require('./app');
const request = require('supertest');

describe('GET /', () => {
  it('should return Hello World message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World from CI/CD Pipeline!');
  });
});