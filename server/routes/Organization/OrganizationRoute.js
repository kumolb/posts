const OrganizationController = require("../../controller/Organization/OrganizationController");

const route = require("express").Router();
route.get('/', OrganizationController.getOrganization);
route.get('/:id', OrganizationController.getOneOrganization);
route.post('/', OrganizationController.saveOrganization);
route.put('/:id', OrganizationController.updateOrganization);
route.delete('/:id', OrganizationController.deleteOrganization);

module.exports = route;