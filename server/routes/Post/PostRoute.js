const PostController = require("../../controller/Post/PostController");
const { checkAdmin, checkAuth } = require("../../shared/middlewares/Auth");

const route = require("express").Router();
route.get('/', PostController.getPost);
route.get('/:id', PostController.getOnePost);
route.post('/', checkAdmin, PostController.savePost);
route.put('/:id', checkAuth, PostController.updatePost);
route.delete('/:id', checkAdmin, PostController.deletePost);

module.exports = route;