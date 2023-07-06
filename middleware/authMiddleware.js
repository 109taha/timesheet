const jwt = require("jsonwebtoken");

const verifytoken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Assuming the token is passed in the Authorization header as "Bearer <token>"
        console.log(req.headers)
        const decryptedToken = jwt.verify(token, process.env.admin_jwt_secret);
        req.body.userId = decryptedToken.userId;
        next();

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
};
const adminMiddleware = (req, res, next) => {
    verifytoken(req, res, () => {
        if (req.user.id === req.user.superAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    });
};

const SuperAdminMiddleware = (req, res, next) => {
    verifytoken(req, res, () => {
        if (req.user.superAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    });
};
module.exports = { adminMiddleware, SuperAdminMiddleware, verifytoken }