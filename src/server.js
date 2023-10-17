const { request } = require("express");
const { response } = require("express");
const express = require ("express");

const App = express();
App.use(express.json())

//Query Params
App.post("/user", (request, response) => {
    const { name, email, password} = request.body;

    response.json({ name, email, password});
})

const PORT = 3333;
App.listen(PORT, () => console.log(`Server is running on Port ${PORT} `));