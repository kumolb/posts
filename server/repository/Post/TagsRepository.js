const Tag = require("../../models/Post/Tag");

class TagsRepository {
    async createTags(doc) {
        let newtag = new Tag(doc);
        return await newtag.save();
    }
}

module.exports = new TagsRepository();