const { Router } = require("express");

const usersRouter = Router();

//Query Params
usersRouter.post("/", (request, response) => {
    const { name, email, password} = request.body;

    response.json({ name, email, password});
})

module.exports = usersRouter;