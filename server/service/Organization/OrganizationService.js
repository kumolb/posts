const OrganizationRepository = require("../../repository/Organization/OrganizationRepository");

class OrganizationService {
    async createOrganization(data) {
        let organization = await OrganizationRepository.createOrganization(data);
        return organization;
    }
    async getOrganization(query) {
        let query = query.query;
        let option = query.option;
        let organization = await OrganizationRepository.getAllOrganizations(query, option);
        return organization;
    }

    async getOneOrganization(query) {
        return await OrganizationRepository.getOrganizationById(query);
    }

    async updateOrganization(query) {
        return await OrganizationRepository.updatedUser(query.query, query.option);
    }

    async deleteOrganization(query) {
        return await OrganizationRepository.deleteOrganization(query)
    }

    async OrganizationCount(query) {
        return await OrganizationRepository.countOrganization(query);
    }
}

module.exports = new OrganizationService();