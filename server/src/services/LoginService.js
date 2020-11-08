const db = require('../database/connection');

const auth = require('../utils/auth');

module.exports = {
  async create(credentials) {
    const { email, password } = credentials;

    let ong = await db('ongs').where('email', email).select('*').first();

    if (!ong) {
      return response.status(400).json({
        error: `ONG com o email ${email} não encontrada.`,
      });
    }

    if (!(await auth.checkPassword(password, ong.hash_password))) {
      return response.status(401).json({ error: 'Senha Incorreta!' });
    }

    let token = auth.generateToken(ong);
    const { hash_password, ...loggedOng } = ong;

    return { ong: loggedOng, token };
  },
};
