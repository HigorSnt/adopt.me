const knex = require('knex');

const configuration = require('../../knexfile');
const knexConfiguration = configuration.development;

const connection = knex(knexConfiguration);

module.exports = connection;
