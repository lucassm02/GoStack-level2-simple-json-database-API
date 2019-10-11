module.exports = {
  checkBody(req, res, next) {
    const endPoints = req.url.split("/");

    switch (endPoints[1]) {
      case "users":
        switch (req.method) {
          case "POST":
            if (!req.body.user) {
              return res
                .status(400)
                .json({ error: "The field user is required." });
            }
            return next();
            break;
          case "PUT":
            if (!req.body.user) {
              return res
                .status(400)
                .json({ error: "The field user is required." });
            }
            return next();
            break;
        }
        break;
    }
  },
  checkId(req, res, next) {
    const endPoints = req.url.split("/");

    switch (endPoints) {
      case "users":
        const { id } = req.params;
        if (!id) break;
    }
  }
};
