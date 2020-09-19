const db = require('../database/connection');
const { create } = require('./PetController');

module.exports = {
  async index(req, res, next) {
    let species = await db('species').select('*');

    return res.status(200).json(species);
  },
};
