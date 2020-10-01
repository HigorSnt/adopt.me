const PetService = require('../services/PetService');

module.exports = {
  async create(req, res, next) {
    let insertedPet = await PetService.create(req.file, req.body, req.cnpj);

    return res.status(201).json(insertedPet);
  },

  async show(req, res, next) {
    let pet = await PetService.show(req.params);

    return res.json(pet);
  },

  async index(req, res, next) {
    let pets = await PetService.index(req.query);

    return res.json(pets);
  },
};
