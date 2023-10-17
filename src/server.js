const { request } = require("express");
const { response } = require("express");
const express = require ("express");

const App = express();

//Route params
App.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params;

    response.send(`
        Mensagem ID: ${ id }.
        Para o usuário: ${ user }.
    `)
});

//Query Params
App.get("/user", (request, response) => {
    const { page, limit} = request.query;

    response.send(`
        Páginas: ${ page }.
        Limite: ${ limit }.
    `);
})

const PORT = 3333;
App.listen(PORT, () => console.log(`Server is running on Port ${PORT} `));