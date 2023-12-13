const UserRepository = require("../../repository/User/UserRepository");
const AuthService = require("./AuthService");
class UserService {
    async createUser(data) {
        if (data.password) {
            data.password = await AuthService.encryptPassword(data.password);
        }
        let user = await UserRepository.saveUser(data);
        return user;
    }
    async getUser(data) {
        let query = data.query;
        let option = data.option;
        let user = await UserRepository.getUser(query, option);
        return user;
    }

    async getOneUser(data) {
        return await UserRepository.getOneUser(data);
    }

    async updateUser(data) {
        if (data.password) {
            data.password = await AuthService.encryptPassword(data.password);
        }
        return await UserRepository.updatedUser(data.query, data.option);
    }

    async deleteUser(data) {
        return await UserRepository.deletedUser(data);
    }

    async userCount(query) {
        return await UserRepository.userCount(query);
    }
}

module.exports = new UserService();