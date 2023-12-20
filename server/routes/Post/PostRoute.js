const PostController = require("../../controller/Post/PostController");
const TagController = require("../../controller/Post/TagController");
const { checkAdmin, checkAuth } = require("../../shared/middlewares/Auth");

const route = require("express").Router();

route.post("/tags/new-tag", TagController.createTag);
// route.get('/tags/all', TagController.getTags);
// route.get("/tags/single/:id", TagController.getSingleTag);
// route.put("/tags/update/:id", TagController.updateTag);
// route.delete("/tags/delete/:id", TagController.deleteTag);
route.get('/', PostController.getPost);
route.get('/:id', PostController.getOnePost);
route.post('/', checkAdmin, PostController.savePost);
route.put('/:id', checkAuth, PostController.updatePost);
route.delete('/:id', checkAdmin, PostController.deletePost);

module.exports = route;