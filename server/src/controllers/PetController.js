const db = require('../database/connection');

module.exports = {
  async create(req, res, next) {
    const { filename } = req.file;
    const {
      name,
      description,
      breed,
      genre,
      age,
      specialCares: special_cares,
      castrated,
      dewormed,
      specie: specie_id,
      ong,
    } = req.body;

    const pet = {
      name,
      description,
      breed,
      genre,
      age,
      photo_name: filename,
      special_cares,
      castrated,
      dewormed,
      specie_id,
      ong,
    };

    let [id] = await db('pets').insert(pet);

    res.status(201).json({ id, ...pet });
  },

  async getPet(req, res, next) {
    const { id } = req.params;
    const pet = await db('pets').where('id', id).select('*').first();

    res.status(200).json(pet);
  },

  async index(req, res, next) {
    const pets = await db('pets').select('*');

    res.status(200).json(pets);
  },
};
