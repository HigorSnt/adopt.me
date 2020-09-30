const LoginService = require('../services/LoginService');

module.exports = {
  async create(req, res, next) {
    let token = await LoginService.create(req.body);

    return res.status(201).json({ token });
  },
};
