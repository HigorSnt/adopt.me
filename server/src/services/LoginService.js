const db = require('../database/connection');

const auth = require('../utils/auth');

module.exports = {
  async create(credentials) {
    const { cnpj, password } = credentials;

    let ong = await db('ongs').where('cnpj', cnpj).select('*').first();

    if (!ong) {
      return response.status(400).json({
        error: `ONG com o CNPJ ${cnpj} não encontrada.`,
      });
    }

    if (!(await auth.checkPassword(password, ong.hash_password))) {
      return response.status(401).json({ error: 'Senha Incorreta!' });
    }

    return auth.generateToken(ong);
  },
};
