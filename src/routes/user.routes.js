const { Router } = require("express");

const UserController = require("../controllers/UserController");

const usersRouter = Router();

const userController  = new UserController();

//Query Params
usersRouter.post("/", userController.create);


module.exports = usersRouter;