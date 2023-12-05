const PostController = require("../../controller/Post/PostController");


const route = require("express").Router();
route.get('/', PostController.getPost);
route.get('/:id', PostController.getOnePost);
route.post('/', PostController.savePost);
route.put('/:id', PostController.updatePost);
route.delete('/:id', PostController.deletePost);

module.exports = route;