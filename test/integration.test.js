const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');
describe('Integration: GET /api/hex-to-rgb', () => {
  it('returns HTTP 200 and RGB JSON for valid hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb').query({ hex: '#3366CC' });
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ hex: '#3366CC', rgb: { r: 51, g: 102, b: 204 } });
  });
  it('accepts hex without #', async () => {
    const res = await request(app).get('/api/hex-to-rgb?hex=FFFFFF');
    expect(res.status).to.equal(200);
    expect(res.body.rgb).to.deep.equal({ r: 255, g: 255, b: 255 });
  });
  it('returns HTTP 400 for invalid hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb?hex=XYZ123');
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
  });
  it('returns HTTP 400 for missing hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb');
    expect(res.status).to.equal(400);
  });
});
