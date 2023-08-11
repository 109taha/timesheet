const Joi = require("joi")

const userSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(3)
        .max(40),

    employee_ID: Joi.string()
        .required()
        .min(5)
        .max(40),

    number: Joi.number()
        .required(),

    categories: Joi.string()
        .valid("Construction", "Commercial")
        .required(),

    type: Joi.string()
        .valid("Regular", "Trailer")
        .required(),

    freeNow: Joi.string()
        .required(),

    note: Joi.string()
        .optional(),

})

module.exports = userSchema