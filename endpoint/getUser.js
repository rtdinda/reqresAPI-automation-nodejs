
const supertest = require('supertest');
const { API_KEY } = require('../config/apiConfig');
require('dotenv').config({ path: '../.env' });

const api = supertest(process.env.BASE_URL);

export const getListUsers = (page) => api.get(`api/users?page=${page}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('x-api-key', API_KEY);

export const getUser = (id) => api.get(`api/users/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('x-api-key', API_KEY);