const { Router } = require("express")

const usersRouter = require("./user.routes");
const notesRouter = require("./notes.routes");
const sessionRouter = require("./session.routes");
const tagsRouter = require("./tags.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;