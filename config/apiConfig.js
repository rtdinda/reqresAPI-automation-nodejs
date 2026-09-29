const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
  override: true,
});

const API_KEY = process.env.API_KEY || 'reqres-free-v1';

module.exports = {
  API_KEY,
};
