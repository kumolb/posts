const TagService = require("../../service/Post/TagService");
const { created, throughError, success, notFound } = require("../../shared/utils/HttpResponseHandler");
class TagController {
    async createTag(req, res, next) {
        try {
            let tag = await TagService.createTag(req.body);
            return created(res, "new tag created", tag);
        } catch (err) {
            return throughError(res, err);
        }
    }

    async getAllTags(req, res, next) {
        try {
            let page = req.query.page ? +req.query.page : null;
            let limit = req.query.limit ? +req.query.limit : null;
            let text = req.query.text ? req.query.text : null;
            let query = text ? { text: text } : null;

            let tags = await TagService.getTag({ query, option: { page, limit } });
            let total = await TagService.countTag(query);

            return tags && tags.length > 0
                ? success(res, "All tags fetched", tags, { page, limit, total })
                : notFound(res, "No content found", [], { limit, page, total });
        } catch (err) {
            return throughError(res, err);
        }
    }

    async getOneTag(req, res, next) {
        try {
            return success(res, "Get all tags", tag);
        } catch (error) {
            return throughError(res, error);
        }
    }
}

module.exports = new TagController();