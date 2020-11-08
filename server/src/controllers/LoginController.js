const LoginService = require('../services/LoginService');

module.exports = {
  async create(req, res, next) {
    let response = await LoginService.create(req.body);

    return res.status(201).json(response);
  },
};
