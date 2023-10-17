const express = require ("express");

const App = express();

App.get("/", (request, response) => {
    response.send("Hello word!");
});

const PORT = 3333;
App.listen(PORT, () => console.log(`Server is running on Port ${PORT} `));