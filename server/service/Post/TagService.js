const TagsRepository = require("../../repository/Post/TagsRepository");

class TagService {
    async createTag(data) {
        return await TagsRepository.createTags(data);
    }
    async getTag(data) {
        let query = {};
        let page = data.page || null;
        let limit = data.limit || null;
        let select = data.select || null;

        data.id && !data.title ? query = { "id": data.id } : null;
        data.title && !data.id ? query = { "title": { $regex: req.title, "$options": "i" } } : null;
        data.title && data.id ? query["$or"] = [{ "id": data.id }, { "title": { $regex: req.title, "$options": "i" } }] : null;
        return await TagsRepository.getAllTag(query, { page, limit, select })
    }

    async getSingleTag(data) {
        let query = {};
        data.id ? query.id = data.id : null;
        data.title ? query.title = data.title : null;
        return await TagsRepository.getSingleTag(query);
    }
}

module.exports = new TagService();