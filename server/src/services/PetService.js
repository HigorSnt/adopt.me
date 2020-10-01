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

  async show({ id }) {
    const pet = await db('pets').where('id', id).select('*').first();
    return pet;
  },

  async index({ age, specie, uf }) {
    const pets = await db('pets')
      .join('ongs', 'pets.ong_cnpj', '=', 'ongs.cnpj')
      .where(qb => {
        if (uf) qb.where('address', 'like', `%${uf}%`);
        if (specie) qb.where('specie_id', `${specie}`);
        if (age) qb.where('age', '<=', age);
      })
      .select(
        'pets.id',
        'pets.name',
        'pets.description',
        'pets.breed',
        'pets.genre',
        'pets.age',
        'pets.photo_name',
        'pets.special_cares',
        'pets.castrated',
        'pets.dewormed',
        'ongs.email',
        'ongs.cnpj',
        'ongs.address',
        'ongs.whatsapp',
        'ongs.phone'
      );

    return pets.map(a => {
      return {
        id: a.id,
        name: a.name,
        description: a.description,
        breed: a.breed,
        genre: a.genre,
        age: a.age,
        photo_name: a.photo_name,
        special_cares: a.special_cares,
        castrated: a.castrated,
        dewormed: a.dewormed,
        ong: {
          email: a.email,
          cnpj: a.cnpj,
          address: a.address,
          whatsapp: a.whatsapp,
          phone: a.phone,
        },
      };
    });
  },
};
