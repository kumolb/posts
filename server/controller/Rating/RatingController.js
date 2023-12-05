const RatingService = require("../../service/Rating/RatingService");
const { throughError, created, success, notFound, notModified } = require("../../shared/utils/HttpResponseHandler");

class RatingController {
    async saveRating(req, res, next) {
        try {
            let rating = await RatingService.createRating(req.body);
            if (rating) {
                return created(res, "Created successfully", rating);
            } else {
                return throughError(res, { message: "Rating creation failed" });
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getRating(req, res, next) {
        try {
            let page = req.query.page ? +req.query.page : 1;
            let limit = req.query.limit ? +req.query.limit : 10;
            let rating = await RatingService.getRating({ query: req.query, option: { page, limit } });
            let totalRating = await RatingService.ratingCount(query);
            if (rating && rating.length > 0) {
                return success(res, "Rating fatched successful", rating, { page, limit, total: totalRating });
            } else {
                return notFound(res, "No rating found", []);
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getOneRating(req, res, next) {
        try {
            let { id } = req.params;
            let rating = await RatingService.getOneRating({ id });
            if (rating) {
                return success(res, "Rating fatched successful", rating);
            } else {
                return notFound(res, "No Rating found", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async updateRating(req, res, next) {
        try {
            let { id } = req.params;
            let updated = await RatingService.updateRating({ query: { id }, option: req.body });
            if (updated && updated.nMatched && updated.nModified) {
                return success(res, "Updated successfully", {});
            } else {
                return notModified(res, "Not modified", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async deleteRating(req, res, next) {
        try {
            let { id } = req.params;
            let deleted = await RatingService.deleteRating({ id });
            if (deleted && deleted.ok) {
                return success(res, "Rating deleted successful");
            } else {
                return notFound(res, "No content Found");
            }
        } catch (error) {
            return throughError(res, error);
        }
    }

}

module.exports = new RatingController();