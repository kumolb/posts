
require("dotenv").config();
require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require("./api/api");
const app = express();
// const morgan = require("morgan");
// app.use(morgan("dev"));
const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api", appRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/", (req, res) => {
    res.status(200).json({
        success: true,
        statusCode: 204,
        message: "No route found"
    });
})