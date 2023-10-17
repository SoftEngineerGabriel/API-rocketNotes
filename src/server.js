const express = require ("express");

const App = express();

App.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send(`
    Mensagem ID: ${id}.
    Para o usuário: ${user}
    `)
});

const PORT = 3333;
App.listen(PORT, () => console.log(`Server is running on Port ${PORT} `));