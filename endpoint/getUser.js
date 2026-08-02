
import supertest from 'supertest';

import dotenv from 'dotenv';

require('dotenv').config({ path: '.env' });

const api = supertest(process.env.BASE_URL);

// export const getListUsers = (page) => api.get(`/api/users?page=${page}`)
export const getListUsers = (id) => api.get(`api/users?page=${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('x-api-key', 'free_user_3GOVSul7hdp6dEcwZsL6UYupJXo');


// export const getUser = (id) => api.get(`/api/users/${id}`)
export const getUser = (id) => api.get(`api/users/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('x-api-key', 'free_user_3GOVSul7hdp6dEcwZsL6UYupJXo');