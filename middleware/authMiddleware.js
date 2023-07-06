const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Assuming the token is passed in the Authorization header as "Bearer <token>"
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
