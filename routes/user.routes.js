'use strict';
const router = require('express').Router();
const controller = require('../controllers/user.controller');
const ValidateJoi = require('../middleware/joiValidator.middleware');
const ValidateJWT = require('../middleware/jwtValidator.middleware');
const { create, update } = require('../validators/user.validator');

router.get(`/`, ValidateJWT, controller.all);
router.get('/:id', ValidateJWT, controller.getById);
router.post(`/`, ValidateJoi(create), controller.create);
router. put('/:id', [ValidateJWT, ValidateJoi(update)], controller.update);
router.delete('/:id', ValidateJWT, controller.delete);

module.exports = router;