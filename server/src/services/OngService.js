const authUtils = require('../utils/auth');
const db = require('../database/connection');

module.exports = {
  async create(ong) {
    const { cnpj, email, name, address, whatsapp, phone, password } = ong;
    const hash_password = await authUtils.generateHash(password);

    let ongToBeInserted = { cnpj, name, email, address, whatsapp, phone };

    await db('ongs').insert({
      ...ongToBeInserted,
      hash_password,
    });

    return ongToBeInserted;
  },

  async show({ cnpj }) {
    const ong = await db('ongs')
      .where('cnpj', cnpj)
      .select('cnpj', 'name', 'email', 'whatsapp', 'phone', 'address')
      .first();

    return ong;
  },
};
