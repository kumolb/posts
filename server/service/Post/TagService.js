const TagsRepository = require("../../repository/Post/TagsRepository");

class TagService {
    async createTag(data) {
        return await TagsRepository.createTags(data);
    }
}

module.exports = new TagService();