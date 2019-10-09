const express = require("express");

const UserController = require("./controller/UserController");

const routes = express.Router();

routes.get("/users/:id", UserController.getUser);
routes.get("/users", UserController.getAllUsers);
routes.post("/users", UserController.postUser);
routes.put("/users/:id", UserController.putUser);

module.exports = routes;
