const guardSchema = require("../../util/joiSchema/guard")

const validGuardSchema = (req, res, next) => {
    const { error } = guardSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ error })
    } else {
        next()
    }
}

module.exports = validGuardSchema