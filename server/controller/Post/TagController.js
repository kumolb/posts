const TagService = require("../../service/Post/TagService");
const { created, throughError } = require("../../shared/utils/HttpResponseHandler");
class TagController {
    async createTag(req, res, next) {
        try {
            let tag = await TagService.createTag(req.body);
            return created(res, "new tag created", tag);
        } catch (err) {
            return throughError(res, err);
        }
    }
}

module.exports = new TagController();