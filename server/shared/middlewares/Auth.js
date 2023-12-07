const { throughError } = require("../utils/HttpResponseHandler");
const jwt = require("jsonwebtoken");
class Auth {
    async checkAuth(req, res, next) {
        try {
            const timeNow = Math.round(Date.now() / 1000);
            let token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({
                    statusCode: "401",
                    message: "Token missing"
                })
            }
            token = token.split(" ")[1];
            var decoded = jwt.verify(token, process.env.SECRET);
            if (timeNow >= decoded.exp) {
                return res.status(401).json({
                    statusCode: "401",
                    message: "Token expires"
                })
            }
            req.user = decoded.id;
            next();
        } catch (error) {
            return throughError(res, error);
        }
    }

    async checkAdmin(req, res, next) {
        try {
            const timeNow = Math.round(Date.now() / 1000);
            let token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({
                    statusCode: "401",
                    message: "Token missing"
                })
            }
            token = token.split(" ")[1];
            var decoded = jwt.verify(token, process.env.SECRET);
            if (timeNow >= decoded.exp) {
                return res.status(401).json({
                    statusCode: "401",
                    message: "Token expires"
                })
            }
            if (decoded.roleId != "1") {
                return res.status(403).json({
                    statusCode: "403",
                    message: "forbidden"
                })
            }
            req.user = decoded.id;
            next();
        } catch (error) {
            return throughError(res, error);
        }
    }
}

module.exports = new Auth;