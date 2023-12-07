const Role = require("../../models/User/Role");
class RoleRepository {
    async saveRole(data) {
        const newRole = new Role(data);
        newRole.id = newRole._id;
        const savedRole = await newRole.save();
        return savedRole;
    }
    async getRole(query, option) {
        let limit = option.limit;
        let page = option.page;
        let role = await Role.find(query).lean().skip(limit * (page - 1)).limit(limit);
        return role;
    }
    async getOneRole(query) {
        let role = await Role.findOne(query).lean();
        return role;
    }
    async updatedRole(query, updatedObj) {
        const updatedRole = await Role.updateMany({ ...query }, { ...updatedObj });
        return updatedRole;
    }
    async deletedRole(query) {
        const deletedRole = await Role.findByIdAndDelete(query);
        return deletedRole;
    }

    async roleCount(query) {
        return await Role.countDocuments(query);
    }
}

module.exports = new RoleRepository();