
require("dotenv").config();
require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require("./api/api");
const app = express();

app.use("/api", appRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});