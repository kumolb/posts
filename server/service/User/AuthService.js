const UserRepository = require("../../repository/User/UserRepository");
const bcrypt = require('bcrypt');

class AuthService {
    async logIn(userData) {

    }

    async encryptPassword(password) {
        const saltRounds = +process.env.SALT;
        let salt = await bcrypt.genSalt(saltRounds);
        let hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async encryptedPasswordCompare(password, encryptedPassword) {

    }
}

module.exports = new AuthService();