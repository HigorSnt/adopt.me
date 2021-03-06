const OngService = require('../services/OngService');

module.exports = {
  async create(req, res, next) {
    let ong = await OngService.create(req.body);

    return res.status(201).json(ong);
  },

  async show(req, res, next) {
    let ong = await OngService.show(req.params);

    return res.json(ong);
  },

  async getOngPets(req, res, next) {
    let ongPets = await OngService.getOngPets(req.cnpj);

    return res.json(ongPets);
  },
};
