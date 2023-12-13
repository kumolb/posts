const PostRepository = require("../../repository/Post/PostRepository");
const OrganizationService = require("../Organization/OrganizationService");
class PostService {
    async createPost(data) {
        let orgData = await OrganizationService.getOneOrganization({ id: data.orgId })
        if (!orgData) {
            throw new Error("Invalid organization")
        }
        data.orgName = orgData.name;
        let post = await PostRepository.savePost(data);
        return post;
    }
    async getPost(data) {
        let query = data.query;
        let option = data.option;
        let post = await PostRepository.getPost(query, option);
        return post;
    }

    async getOnePost(data) {
        return await PostRepository.getOnePost(data);
    }

    async updatePost(data) {
        return await PostRepository.updatedPost(data.query, data.option);
    }

    async deletePost(data) {
        return await PostRepository.deletedPost(data);
    }

    async postCount(query) {
        return await PostRepository.postCount(query);
    }
}

module.exports = new PostService();