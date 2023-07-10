const Joi = require("joi")

const userSchema = Joi.object({
    firstname: Joi.string()
        .required()
        .min(3)
        .max(40),

    lastname: Joi.string()
        .required()
        .min(3)
        .max(40),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(7)
        .max(70)
        .required(),

    phone: Joi.number()
        .min(10)
        .required(),

})

module.exports = userSchema