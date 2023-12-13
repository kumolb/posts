const User = require("../../models/User/User");
const UserRepository = require("../../repository/User/UserRepository");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { badRequest, notFound, success } = require("../../shared/utils/HttpResponseHandler");

class AuthService {
    async logIn(res, userData) {
        let query = {};
        let { userName, password } = userData;
        if (!userName && !password) {
            return badRequest(res, "Usernamd and password are required");
        }
        query = { $or: [{ email: { $eq: userName } }, { phone: { $eq: userName } }] }
        let user = await UserRepository.getOneUser(query, true);
        if (user) {
            let passwordMatched = await this.encryptedPasswordCompare(password, user.password);
            if (passwordMatched) {
                let body = {};
                user.phone ? body.phone = user.phone : null;
                user.email ? body.email = user.email : null;
                user.roleId ? body.roleId = user.roleId : null;
                user.name ? body.name = user.name : null;
                user.image ? body.image = user.image : null;
                user.isAdmin ? body.isAdmin = true : null;
                body.id = user.id;
                let token = jwt.sign(body, process.env.SECRET, { expiresIn: +process.env.LOGINTIME });
                return success(res, "login succeed", { userId: user.id, token });
            } else {
                return badRequest(res, "Wrong password");
                return { success: false, msg: "wrongpassword" }
            }
        } else {
            return notFound(res, "Username not matched")
            return { success: false, msg: "notfound" };
        }
    }

    async encryptPassword(password) {
        const saltRounds = +process.env.SALT;
        let salt = await bcrypt.genSalt(saltRounds);
        let hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async encryptedPasswordCompare(password, encryptedPassword) {
        return await bcrypt.compare(password, encryptedPassword);
    }
}

module.exports = new AuthService();