const { request } = require("express");


const routes = require("./routes");


const express = require ("express");

const app = express();
app.use(express.json());

//rotas estão aqui
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT} `));