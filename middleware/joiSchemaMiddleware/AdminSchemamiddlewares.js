const adminSchema = require("../../util/joiSchema/admin")

const validAdminSchema = (req, res, next) => {
    const { error } = adminSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ error })
    } else {
        next()
    }
}

module.exports = validAdminSchema