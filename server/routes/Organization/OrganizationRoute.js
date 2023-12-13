const OrganizationController = require("../../controller/Organization/OrganizationController");
const { checkAdmin } = require("../../shared/middlewares/Auth");

const route = require("express").Router();
route.get('/', OrganizationController.getOrganization);
route.get('/:id', OrganizationController.getOneOrganization);
route.post('/', checkAdmin, OrganizationController.saveOrganization);
route.put('/:id', checkAdmin, OrganizationController.updateOrganization);
route.delete('/:id', checkAdmin, OrganizationController.deleteOrganization);

module.exports = route;