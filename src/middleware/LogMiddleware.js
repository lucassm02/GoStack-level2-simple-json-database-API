const db = require('../config/db');

module.exports = {
  async logAccess(req, res, next) {
    const { user } = req;

    const startTime = process.hrtime();
    next();
    const requestTime = process.hrtime(startTime);

    await db
      .get('log')
      .push({
        access: `O usuário ${user.name} efetuou login.`,
        method: `${req.method}`,
        url: `${req.url}`,
        requestTime: `${requestTime[0]}s  ${requestTime[1] / 1000000} ms`
      })
      .write();
  }
};
