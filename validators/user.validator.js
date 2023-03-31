const Joi = require('joi');

const userValidator = {
    create : Joi.object().keys({
        name : Joi.string().required(),
        email : Joi.string().email().required(),
        password : Joi.string().required()
    }),
    update : Joi.object().keys({
        name : Joi.string().optional(),
        email : Joi.string().email().optional()
    })
};

module.exports = userValidator;