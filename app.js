const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});