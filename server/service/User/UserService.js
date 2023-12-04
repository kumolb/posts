const UserRepository = require("../../repository/User/UserRepository");
class UserService {
    async createUser(data) {
        let user = await UserRepository.saveUser(data);
        return user;
    }
    async getUser(data) {
        let query = data.query;
        let option = data.option;
        let user = await UserRepository.getOneUser(query, option);
        return user;
    }

    async getOneUser(data) {
        return await UserRepository.getOneUser(data);
    }

    async updateUser(data) {
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