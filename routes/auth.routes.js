'use strict';
const router = require('express').Router();
const controller = require('../controllers/auth.controller');
const ValidateJoi = require('../middleware/joiValidator.middleware');
const { login } = require('../validators/auth.validator');

router.post(`/login`, ValidateJoi(login), controller.login);

module.exports = router;