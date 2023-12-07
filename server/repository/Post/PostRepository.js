const Post = require("../../models/Post/Post");
class PostRepository {
    async savePost(data) {
        const newPost = new Post(data);
        newPost.id = newPost._id;
        const savedPost = await newPost.save();
        return savedPost;
    }
    async getPost(query, option) {
        let limit = option.limit;
        let page = option.page;
        let post = await Post.find(query).lean().skip(limit * (page - 1)).limit(limit);
        return post;
    }
    async getOnePost(query) {
        let post = await Post.findOne(query).lean();
        return post;
    }
    async updatedPost(query, updatedObj) {
        const updatedPost = await Post.updateMany({ ...query }, { ...updatedObj });
        return updatedPost;
    }
    async deletedPost(query) {
        const deletedPost = await Post.findByIdAndDelete(query);
        return deletedPost;
    }

    async postCount(query) {
        return await Post.countDocuments(query);
    }
}

module.exports = new PostRepository();