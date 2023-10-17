const express = require ("express");

const App = express();

const PORT = 3333;
App.listen(PORT, () => console.log(`Server is running on Port ${PORT} `));