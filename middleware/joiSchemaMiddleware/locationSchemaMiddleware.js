const locationSchema = require("../../util/joiSchema/location")

const validLocationSchema = (req, res, next) => {
    const { error } = locationSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ error })
    } else {
        next()
    }
}

module.exports = validLocationSchema