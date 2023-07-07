const Joi = require("joi")

const locationSchema = Joi.object({
    locationName: Joi.string()
        .required()
        .min(5)
        .max(400),

    address: Joi.string()
        .required()
        .min(5)
        .max(400),

    timeZone: Joi.string()
        .required(),

    coverageTime: Joi.string()
        .required(),

    clientDetail: Joi.object({
        email: Joi.string().required().email(),
        role: Joi.string().required(),
        contact_Number: Joi.number().required(),
    }),

    locatedType: Joi.string()
        .required()
        .valid("Commercial", "Construction"),

    site: Joi.string()
        .required()
        .valid("Monitoring", "NON-Monitoring"),

    locatedWhere: Joi.string()
        .required()
        .valid("Los Angeles A", "Los Angeles B", "North", "Mendota", "San Diego"),

    note: Joi.string()
        .optional(),
}).unknown(true);

module.exports = locationSchema