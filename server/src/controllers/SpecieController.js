const SpecieService = require('../services/SpecieService');

module.exports = {
  async index(req, res, next) {
    let species = await SpecieService.index();

    return res.status(200).json(species);
  },
};
