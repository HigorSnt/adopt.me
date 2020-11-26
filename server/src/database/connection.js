const knex = require('knex');

const configuration = require('../../knexfile');
const knexConfiguration = process.env.NODE_ENV
  ? configuration.production
  : configuration.development;

const connection = knex(knexConfiguration);

module.exports = connection;
