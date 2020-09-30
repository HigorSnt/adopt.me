const db = require('../database/connection');

module.exports = {
  async create({ filename }, body, ong_cnpj) {
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
    } = body;

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
      ong_cnpj,
    };

    let [id] = await db('pets').insert(pet);

    return { id, ...pet };
  },

  async show(id) {
    const pet = await db('pets').where('id', id).select('*').first();
    return pet;
  },

  async index() {
    return await db('pets').select('*');
  },
};
