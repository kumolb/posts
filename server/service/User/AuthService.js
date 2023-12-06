const UserRepository = require("../../repository/User/UserRepository");
const bcrypt = require('bcrypt');

class AuthService {
    async logIn(userData) {

    }

    encryptPassword(password){
        const saltRounds = process.env.SALT;
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        return hash;
    });
});
    }

    encryptedPasswordCompare(password, encryptedPassword){

    }
}

module.exports = new AuthService();