const { request } = require("express");
const { response } = require("express");
const express = require ("express");

const App = express();

//Query Params
App.post("/user", (request, response) => {

    response.send(`Você chamou o POST`);
})

const PORT = 3333;
App.listen(PORT, () => console.log(`Server is running on Port ${PORT} `));