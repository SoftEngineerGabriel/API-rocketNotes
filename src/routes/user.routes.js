const { Router } = require("express");

const UserController = require("../controllers/UserController");

const userRoutes = Router();

const userController = new UserController();

//Query Params
userRoutes.post("/", userController.create);
userRoutes.put("/:id", userController.update);

module.exports = userRoutes;
