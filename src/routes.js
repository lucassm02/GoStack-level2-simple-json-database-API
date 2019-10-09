const express = require("express");

//Middleware Local
const UserController = require("./controller/UserController");
const ValidatorMiddleware = require("./middleware/ValidatorMiddleware");

const routes = express.Router();

routes.get("/users/:id", UserController.get);
routes.get("/users", UserController.getAll);
routes.post("/users", ValidatorMiddleware.checkBody, UserController.post);
routes.put("/users/:id", ValidatorMiddleware.checkBody, UserController.put);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
