const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const loginUser = (bodyReq) => api.post('api/login')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('x-api-key', 'free_user_3GOVSul7hdp6dEcwZsL6UYupJXo')
    .send(bodyReq);