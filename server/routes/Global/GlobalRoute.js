const { fileUploader, upload } = require("../../shared/middlewares/FileUploader");
const { throughError } = require("../../shared/utils/HttpResponseHandler");
const route = require("express").Router();

route.post("/upload/file", upload.single("file"), (req, res, next) => {
    try {
        res.json({
            success: true,
            statusCode: "200",
            filePath: `uploads/${req.file.filename}`
        })
    } catch (err) {
        return throughError(res, err)
    }
});

module.exports = route;