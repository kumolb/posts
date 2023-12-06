const PostService = require("../../service/Post/PostService");
const { throughError, created, success, notFound, notModified } = require("../../shared/utils/HttpResponseHandler");

class PostController {
    async savePost(req, res, next) {
        try {
            let post = await PostService.createPost(req.body);
            if (post) {
                return created(res, "Created successfully", post);
            } else {
                return throughError(res, { message: "Post creation failed" });
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getPost(req, res, next) {
        try {
            let page = req.query.page ? +req.query.page : 1;
            let limit = req.query.limit ? +req.query.limit : 10;
            let query = req.query || {}
            let post = await PostService.getPost({ query, option: { page, limit } });
            let totalPost = await PostService.postCount(query);
            if (post && post.length > 0) {
                return success(res, "Post fatched successful", post, { page, limit, total: totalPost });
            } else {
                return notFound(res, "No Post found", []);
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async getOnePost(req, res, next) {
        try {
            let { id } = req.params;
            let post = await PostService.getOnePost({ id });
            if (post) {
                return success(res, "Post fatched successful", post);
            } else {
                return notFound(res, "No post found", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async updatePost(req, res, next) {
        try {
            let { id } = req.params;
            let updated = await PostService.updatePost({ query: { id }, option: req.body });
            if (updated && updated.nMatched && updated.nModified) {
                return success(res, "Updated successfully", {});
            } else {
                return notModified(res, "Not modified", {});
            }
        } catch (error) {
            return throughError(res, error);
        }
    }
    async deletePost(req, res, next) {
        try {
            let { id } = req.params;
            let deleted = await PostService.deletePost({ id });
            if (deleted && deleted.ok) {
                return success(res, "Post deleted successful");
            } else {
                return notFound(res, "No content Found");
            }
        } catch (error) {
            return throughError(res, error);
        }
    }

}

module.exports = new PostController();