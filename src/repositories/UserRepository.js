

const { hash } = require('bcryptjs');
const sqliteConnection = require('../database/sqlite');

class UserRepository {
    async findByEmail(email) {
        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        return user;
    }

    async findByEmail( {nome, email, password} ) {
        const database = await sqliteConnection();

        const userId = await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [nome, email, password ]
        );
    

        return { id: userId};
    }
}
  module.exports = UserRepository;