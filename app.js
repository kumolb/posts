
require("dotenv").config();
require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require("./api/api");
const app = express();

app.use("/api", appRouter);
app.use(express.static("public"));
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});