const route = require("express").Router();
const userRoute = require('./User/UserRoute');
const ratingRoute = require("./Rating/RatingRoute");
const organizationRoute = require("./Organization/OrganizationRoute");
const postRoute = require("./Post/PostRoute");
const roleRoute = require("./User/RoleRoute");

route.use("/users/roles", roleRoute);
route.use("/users", userRoute);
route.use("/ratings", ratingRoute);
route.use("/posts", postRoute);
route.use("/organizations", organizationRoute);

module.exports = route;