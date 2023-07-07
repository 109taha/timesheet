const Joi = reqiure("joi")

const adminSchema = Joi.object({
    firstname: Joi.string()
        .require()
        .min(5)
        .max(40),

    lastname: Joi.string()
        .require()
        .min(5)
        .max(40),

    email: Joi.string()
        .email()
        .required(),

    username: Joi.string()
        .min(5)
        .max(40)
        .pattern(/^[A-Za-z0-9]*$/)
        .required(),

    password: Joi.string()
        .min(7)
        .max(70)
        .required(),
})