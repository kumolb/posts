const UserController = require("../../controller/User/UserController");
const Auth = require("../../shared/middlewares/Auth");

const route = require("express").Router();
route.get('/all', Auth.checkAuth, UserController.getUser);
route.get('/single/:id', UserController.getOneUser);
route.post('/', UserController.saveUser);
route.put('/:id', UserController.updateUser);
route.delete('/:id', Auth.checkAdmin, UserController.deleteUser);
route.post("/login", UserController.logIn);

module.exports = route;