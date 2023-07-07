const Joi = require("joi")

const adminSchema = Joi.object({
    firstname: Joi.string()
        .min(3)
        .max(40)
        .required(),

    lastname: Joi.string()
        .required()
        .min(3)
        .max(40),

    email: Joi.string()
        .email()
        .required(),

    superAdmin: Joi.string()
        .required()
        .optional(),

    password: Joi.string()
        .min(7)
        .max(70)
        .required(),

    phone: Joi.number()
        .min(7)
        .required(),

})

module.exports = adminSchema