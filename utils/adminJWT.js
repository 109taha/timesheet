const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.admin_jwt_secret, {
        expiresIn: '30d'
    })

    res.cookie('jwt', token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 60
    })
}

module.exports = generateToken;
