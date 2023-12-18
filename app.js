
require("dotenv").config();
require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require("./api/api");
const app = express();
// const morgan = require("morgan");
// app.use(morgan("dev"));
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('uploads', express.static(path.join(__dirname, 'uploads')))
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split("/")[1])
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 // 1MB
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (!allowedTypes.includes(file.mimetype)) {
            const error = new Error('Invalid file type');
            error.code = 'INVALID_FILE_TYPE';
            return cb(error, false);
        }

        cb(null, true);
    }
})
app.post("/upload/file", upload.single("file"), (req, res, next) => {
    try {
        // console.log(req.file, req.body)
        console.log(req.file)
        res.json({
            success: true,
            statusCode: 200,
            filePath: `localhost:3000/${req.file.path}`
        })
    } catch (err) {
        console.log(err);
        return throughError(res, err)
    }
});

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/", (req, res) => {
    res.status(200).json({
        success: true,
        statusCode: 204,
        message: "No route found"
    });
})
app.use("/api", appRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});