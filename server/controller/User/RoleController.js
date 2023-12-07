const RoleService = require("../../service/User/RoleService");
const { throughError, created, success, notFound, notModified, badRequest } = require("../../shared/utils/HttpResponseHandler");
class RoleController {
    async saveRole(req, res, next) {
        try {
            res.time = new Date();
            req.body.author = req.user;
            let role = await RoleService.createRole(req.body);
            if (role) {
                return created(res, "Created successfully", role);
            } else {
                return throughError(res, { message: "Role creation failed" });
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getRole(req, res, next) {
        try {
            res.time = new Date();
            res.requestTime = new Date();
            let page = req.query.page ? +req.query.page : 1;
            let limit = req.query.limit ? +req.query.limit : 10;
            let query = req.query || {}
            let role = await RoleService.getRole({ query, option: { page, limit } });
            let totalRole = await RoleService.roleCount(query);
            if (role && role.length > 0) {
                return success(res, "Role fatched successful", role, { page, limit, total: totalRole });
            } else {
                return notFound(res, "No Role found", [], { page, limit, total: totalRole });
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getOneRole(req, res, next) {
        try {
            res.time = new Date();
            let { id } = req.params;
            let role = await RoleService.getOneRole({ id });
            if (role) {
                return success(res, "Role fatched successful", role);
            } else {
                return notFound(res, "No Role found", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async updateRole(req, res, next) {
        try {
            res.time = new Date();
            let { id } = req.params;
            let updated = await RoleService.updateRole({ query: id, option: req.body });
            if (updated && updated.nMatched && updated.nModified) {
                return success(res, "Updated successfully", {});
            } else {
                return notModified(res, "Not modified", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async deleteRole(req, res, next) {
        try {
            res.time = new Date();
            let { id } = req.params;
            let deleted = await RoleService.deleteRole({ id });
            if (deleted && deleted.ok) {
                return success(res, "Role deleted successful");
            } else {
                return notFound(res, "No content Found");
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
}

module.exports = new RoleController();