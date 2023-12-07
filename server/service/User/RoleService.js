const RoleRepository = require("../../repository/User/RoleRepository");
const AuthService = require("./AuthService");
class RoleService {
    async createRole(data) {
        let role = await RoleRepository.saveRole(data);
        return role;
    }
    async getRole(data) {
        let query = data.query;
        let option = data.option;
        let role = await RoleRepository.getRole(query, option);
        return role;
    }

    async getOneRole(data) {
        return await RoleRepository.getOneRole(data);
    }

    async updateRole(data) {
        let query = { $or: [{ id: data.query }, { roleId: data.query }] }
        return await RoleRepository.updatedRole(query, data.option);
    }

    async deleteRole(data) {
        return await RoleRepository.deletedRole(data);
    }

    async roleCount(query) {
        return await RoleRepository.roleCount(query);
    }
}

module.exports = new RoleService();