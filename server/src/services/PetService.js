const db = require('../database/connection');

module.exports = {
  async create(body, ong_cnpj) {
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
      imageUrl: image_url,
    } = body;

    const pet = {
      name,
      description,
      breed,
      genre,
      age,
      image_url,
      special_cares,
      castrated,
      dewormed,
      specie_id,
      ong_cnpj,
    };

    await db('pets').insert(pet);

    return { ...pet };
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
        'pets.image_url',
        'pets.special_cares',
        'pets.castrated',
        'pets.dewormed',
        'ongs.email',
        'ongs.name as ong_name',
        'ongs.cnpj',
        'ongs.address',
        'ongs.whatsapp',
        'ongs.phone'
      );

    return pets.map(pet => {
      return {
        id: pet.id,
        name: pet.name,
        description: pet.description,
        breed: pet.breed,
        genre: pet.genre,
        age: pet.age,
        imageUrl: pet.image_url,
        special_cares: Boolean(pet.special_cares),
        castrated: Boolean(pet.castrated),
        dewormed: Boolean(pet.dewormed),
        ong: {
          name: pet.ong_name,
          email: pet.email,
          cnpj: pet.cnpj,
          address: pet.address,
          whatsapp: pet.whatsapp,
          phone: pet.phone,
        },
      };
    });
  },
};
