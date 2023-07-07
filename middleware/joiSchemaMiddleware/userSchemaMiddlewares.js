const userSchema = require("../../util/joiSchema/user")

const validUserSchema = (req, res, next) => {
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ error })
    } else {
        next()
    }
}

module.exports = validUserSchema