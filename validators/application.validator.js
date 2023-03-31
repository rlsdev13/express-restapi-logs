const Joi = require('joi');

const applicationValidator = {
    create : Joi.object().keys({
        name : Joi.string().lowercase().required()
    })
};

module.exports = applicationValidator;