module.exports = {
  // eslint-disable-next-line consistent-return
  checkBody(req, res, next) {
    const endPoints = req.url.split('/');

    switch (endPoints[1]) {
      case 'users':
        // eslint-disable-next-line default-case
        switch (req.method) {
          case 'POST':
            if (!req.body.user) {
              return res.status(400).json({ error: 'The field user is required.' });
            }
            return next();
          case 'PUT':
            if (!req.body.user) {
              return res.status(400).json({ error: 'The field user is required.' });
            }
            return next();
        }
        break;
      default:
        return res.status(404).json({ error: 'Route not found.' });
    }
  }
};
