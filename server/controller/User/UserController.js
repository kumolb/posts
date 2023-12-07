const AuthService = require("../../service/User/AuthService");
const UserService = require("../../service/User/UserService");
const { throughError, created, success, notFound, notModified, badRequest } = require("../../shared/utils/HttpResponseHandler");
class UserController {
    async saveUser(req, res, next) {
        try {
            console.log(req.body)
            let user = await UserService.createUser(req.body);
            if (user) {
                return created(res, "Created successfully", user);
            } else {
                return throughError(res, { message: "User creation failed" });
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getUser(req, res, next) {
        try {
            res.requestTime = new Date();
            let page = req.query.page ? +req.query.page : 1;
            let limit = req.query.limit ? +req.query.limit : 10;
            let query = req.query || {}
            let user = await UserService.getUser({ query, option: { page, limit } });
            let totalUser = await UserService.userCount(query);
            if (user && user.length > 0) {
                return success(res, "User fatched successful", user, { page, limit, total: totalUser });
            } else {
                return notFound(res, "No user found", [], { page, limit, total: totalUser });
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getOneUser(req, res, next) {
        try {
            let { id } = req.params;
            let user = await UserService.getOneUser({ id });
            if (user) {
                return success(res, "User fatched successful", user);
            } else {
                return notFound(res, "No user found", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async updateUser(req, res, next) {
        try {
            let { id } = req.params;
            let updated = await UserService.updateUser({ query: { id }, option: req.body });
            if (updated && updated.nMatched && updated.nModified) {
                return success(res, "Updated successfully", {});
            } else {
                return notModified(res, "Not modified", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async deleteUser(req, res, next) {
        try {
            let { id } = req.params;
            let deleted = await UserService.deleteUser({ id });
            if (deleted && deleted.ok) {
                return success(res, "User deleted successful");
            } else {
                return notFound(res, "No content Found");
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async logIn(req, res, next) {
        try {
            if (!req.body.userName || !req.body.password) {
                return badRequest(res, "Username and password are required", {});
            }
            return await AuthService.logIn(res, req.body);
        } catch (error) {
            return throughError(res, error);
        }
    }
}

module.exports = new UserController();