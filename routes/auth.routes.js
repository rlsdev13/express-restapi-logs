'use strict';
const router = require('express').Router();
const controller = require('../controllers/auth.controller');
const Validator = require('../middleware/validator');
const { login } = require('../validators/auth.validator');

router.post(`/login`, Validator(login), controller.login);

module.exports = router;