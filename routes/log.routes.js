'use strict';
const router = require('express').Router();
const controller = require('../controllers/log.controller');
const ValidateJoi = require('../middleware/joiValidator.middleware');
const ValidateJWT = require('../middleware/jwtValidator.middleware');
const { create, update } = require('../validators/log.validator');

router.get(`/`, ValidateJWT, controller.all);
router.get('/:id', ValidateJWT, controller.getById);
router.post(`/`, [ValidateJWT, ValidateJoi(create)], controller.create);
router. put('/:id', [ValidateJWT, ValidateJoi(update)], controller.update);
router.delete('/:id', ValidateJWT, controller.delete);

module.exports = router;