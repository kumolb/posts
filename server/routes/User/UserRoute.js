const UserController = require("../../controller/User/UserController");

const route = require("express").Router();
route.get('/', UserController.getUser);
route.get('/:id', UserController.getOneUser);
route.post('/', UserController.saveUser);
route.put('/:id', UserController.updateUser);
route.delete('/:id', UserController.deleteUser);

module.exports = route;