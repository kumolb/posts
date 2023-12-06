const app = require("express").Router();
const appRouter = require("../server/routes/index");
app.use(appRouter);

module.exports = app;