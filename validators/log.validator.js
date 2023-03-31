const Joi = require('joi');

const logValidator = {
    create : Joi.object().keys({
        application_id : Joi.string().pattern(new RegExp('^[a-fA-F0-9]{24}$')).required(),
        type : Joi.string().valid('error','info','warning').required(),
        priority : Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest').required(),
        path : Joi.string().required(),
        message : Joi.string().required(),
        request : Joi.object({
            data : Joi.any().required(),
            response : Joi.any().required()
        })
    }),
    update : Joi.object().keys({
        application_id : Joi.string().pattern(new RegExp('^[a-fA-F0-9]{24}$')).optional(),
        type : Joi.string().valid('error','info','warning').optional(),
        priority : Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest').optional(),
        path : Joi.string().optional(),
        message : Joi.string().optional(),
        request : Joi.object({
            data : Joi.any().optional(),
            response : Joi.any().optional()
        })
    })
};

module.exports = logValidator;