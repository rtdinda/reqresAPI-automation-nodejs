const supertest = require('supertest');
const { API_KEY } = require('../config/apiConfig');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const updateUser = (id, bodyReq) => api.put(`api/users/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('x-api-key', API_KEY)
    .send(bodyReq);