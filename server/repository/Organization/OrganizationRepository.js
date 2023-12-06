const Organization = require("../../models/Organization/Organization");

class OrganizationRepository {
    async createOrganization(data) {
        const organization = new Organization(data);
        return await organization.save();
    }

    // Read
    async getOrganizationById(query) {
        return await Organization.findOne(query).lean();
    }

    async getAllOrganizations(query) {
        return await Organization.find(query).lean();
    }

    // Update
    async updateOrganization({ id }, data) {
        return await Organization.update({ id }, { $set: data });
    }

    // Delete
    async deleteOrganization({ id }) {
        return await Organization.findByIdAndDelete({ id });
    }

    async countOrganization(query) {
        return await Organization.countDocuments(query);
    }
}

module.exports = new OrganizationRepository();