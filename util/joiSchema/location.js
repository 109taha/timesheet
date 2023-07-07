const Joi = reqiure("joi")

const adminSchema = Joi.object({
    locationName: Joi.string()
        .require()
        .min(5)
        .max(400),

    address: Joi.string()
        .require()
        .min(5)
        .max(400),

    timeZone: Joi.string()
        .email()
        .required(),

    coverageTime: Joi.string()
        .min(5)
        .max(40)
        .pattern(/^[A-Za-z0-9]*$/)
        .required(),

    clientDetail: Joi.string()
        .min(7)
        .max(70)
        .required(),
})