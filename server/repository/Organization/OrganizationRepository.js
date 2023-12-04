const Organization = require("../../models/Organization");

class OrganizationRepository {
    async createOrganization(data) {
        const organization = new Organization(data);
        return await organization.save();
    }

    // Read
    async getOrganizationById(id) {
        return await Organization.findOne(id).lean();
    }

    async getAllOrganizations(query) {
        return await Organization.find(query).lean();
    }

    // Update
    async updateOrganization(id, data) {
        return await Organization.update(id, { $set: data });
    }

    // Delete
    async deleteOrganization(id) {
        return await Organization.findByIdAndDelete(id);
    }
}

module.exports = new OrganizationRepository();