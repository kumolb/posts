const Organization = require("../../models/Organization/Organization");
const AuthService = require("../../service/User/AuthService");

class OrganizationRepository {
    async createOrganization(data) {
        if (data.password) {
            data.password = await AuthService.encryptPassword(data.password);
        }
        const organization = new Organization(data);
        organization.id = organization._id;
        let userNameExist = await this.countOrganization({ userName: data.userNameExist });
        if (userNameExist) {
            throw new Error("Username alread exist");
        }
        return await organization.save();
    }

    // Read
    async getOneOrganization(query) {
        return await Organization.findOne(query).lean();
    }

    async getAllOrganizations(query) {
        return await Organization.find(query).lean();
    }

    // Update
    async updateOrganization({ id }, data) {
        if (data.password) {
            data.password = await AuthService.encryptPassword(data.password);
        }
        return await Organization.updateMany({ id }, { $set: data });
    }

    // Delete
    async deleteOrganization({ id }) {
        return await Organization.deleteMany({ id });
    }

    async countOrganization(query) {
        return await Organization.countDocuments(query);
    }
}

module.exports = new OrganizationRepository();