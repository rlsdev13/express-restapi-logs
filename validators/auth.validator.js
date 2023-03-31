const Joi = require('joi');

const authValidator = {
    login : Joi.object().keys({
        email : Joi.string().email().required(),
        password : Joi.string().required()
    })
};

module.exports = authValidator;