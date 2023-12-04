
const OrganizationService = require("../../service/Organization/OrganizationService");
const { throughError, created, success, notFound, notModified } = require("../../shared/utils/HttpResponseHandler");

class OrganizationController {
    async saveOrganization(req, res, next) {
        try {
            let organization = await OrganizationService.createOrganization(req.body);
            if (organization) {
                return created(res, "Created successfully", user);
            } else {
                return throughError(res, { message: "Organization creation failed" });
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getOrganization(req, res, next) {
        try {
            let page = req.query.page ? +req.query.page : 1;
            let limit = req.query.limit ? +req.query.limit : 10;
            let organization = await OrganizationService.getOrganization({ query: req.query, option: { page, limit } });
            let totalOrganization = await OrganizationService.OrganizationCount(query);
            if (organization && organization.length > 0) {
                return success(res, "Organization fatched successful", organization, { page, limit, total: totalOrganization });
            } else {
                return notFound(res, "No Organization found", []);
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getOneOrganization(req, res, next) {
        try {
            let { id } = req.params;
            let organization = await OrganizationService.getOneOrganization({ id });
            if (organization) {
                return success(res, "Organization fatched successful", organization);
            } else {
                return notFound(res, "No organization found", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async updateOrganization(req, res, next) {
        try {
            let { id } = req.params;
            let updated = await OrganizationService.updateOrganization({ query: { id }, option: req.body });
            if (updated && updated.nMatched && updated.nModified) {
                return success(res, "Updated successfully", {});
            } else {
                return notModified(res, "Not modified", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async deleteOrganization(req, res, next) {
        try {
            let { id } = req.params;
            let deleted = await OrganizationService.deleteOrganization({ id });
            if (deleted && deleted.ok) {
                return success(res, "Organization deleted successful");
            } else {
                return notFound(res, "No content Found");
            }
        } catch (error) {
            return throughError(res, error);
        }
    }

}

module.exports = new OrganizationController();