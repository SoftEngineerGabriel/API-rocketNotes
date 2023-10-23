const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite");

class UserController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists) {
            throw new AppError("User already exists");
        }

        const hashPassword = await hash(password, 8);

        await database.run("INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email, hashPassword]);

        return response.status(201).json();

    }
}

module.exports = UserController;