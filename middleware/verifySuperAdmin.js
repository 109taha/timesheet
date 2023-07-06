const jwt = require("jsonwebtoken");
const Admin = require('../models/admin');

const verifySuperAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Assuming the token is passed in the Authorization header as "Bearer <token>"
        const decryptedToken = jwt.verify(token, process.env.admin_jwt_secret);
        req.body.userId = decryptedToken.userID;
        let admin = await Admin.findOne({ _id: req.body.userId })
        req.user = { isSuperAdmin: admin.superAdmin }
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = verifySuperAdmin 