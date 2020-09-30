const db = require('../database/connection');

module.exports = {
  async index() {
    return await db('species').select('*');
  },
};
