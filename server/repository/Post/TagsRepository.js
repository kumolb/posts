const Tag = require("../../models/Post/Tag");

class TagsRepository {
    async createTags(doc) {
        let newtag = new Tag(doc);
        return await newtag.save();
    }

    async getAllTag(query, option) {
        let limit = option.limit || null;
        let page = option.page || 1;
        let select = option.select ? option.select : "-_id -__v";
        let tags = limit && page
            ? await Tag.find(query).sort({ _id: -1 }).skip((limit * (page - 1))).limit(limit).select(select).lean()
            : await Tag.find(query).select(select).lean();
        return tags;
    }

    async getSingleTag(query, option) {
        let select = option.select ? option.select : "-_id -__v";
        let tags = await Tag.findOne(query).select(select).lean();
        return tags;
    }

    async updateTag(query, option) {
        let updated = await Tag.updateMany(query, { $set: option });
        return updated;
    }

    async deleteTag(query) {
        return await Tag.deleteMany(query);
    }
}

module.exports = new TagsRepository();