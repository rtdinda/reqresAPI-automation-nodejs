const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const updateUser = (id, bodyReq) => api.put(`api/users/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('x-api-key', 'free_user_3GOVSul7hdp6dEcwZsL6UYupJXo')
    .send(bodyReq);