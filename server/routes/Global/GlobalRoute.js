const { fileUploader, upload } = require("../../shared/middlewares/FileUploader");
const { throughError } = require("../../shared/utils/HttpResponseHandler");
const route = require("express").Router();

route.post("/upload/file", upload.single("file"), (req, res, next) => {
    try {
        console.log(req.file, req.body)
        res.json({
            filePath: ""
        })
    } catch (err) {
        return throughError(res, err)
    }
});

module.exports = route;