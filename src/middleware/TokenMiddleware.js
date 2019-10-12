const shortId = require('shortid');
const db = require('../config/db');

module.exports = {
  // Validação de credênciais do usuário + log de acesso
  async auth(req, res, next) {
    const { token } = req.headers;

    if (token) {
      const user = await db
        .get('user')
        .find({ token })
        .value();

      if (user) {
        if (!shortId.isValid(token))
          return res.status(500).json({
            error: 'Token is invalid.',
            message: `Are you trying to broke my legs?, Mr. ${user.name}`
          });

        req.user = user;
        return next();
      }

      return res.status(401).json({ error: 'Token is invalid.' });
    }
    return res.status(401).json({ error: 'Token is required.' });
  }
};
