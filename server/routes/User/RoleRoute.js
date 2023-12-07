const RoleController = require("../../controller/User/RoleController");
const Auth = require("../../shared/middlewares/Auth");

const route = require("express").Router();
route.get('/all', RoleController.getRole);
route.get('/single/:id', RoleController.getOneRole);
route.post('/', RoleController.saveRole);
route.put('/:id', RoleController.updateRole);
route.delete('/:id', Auth.checkAdmin, RoleController.deleteRole);
module.exports = route;