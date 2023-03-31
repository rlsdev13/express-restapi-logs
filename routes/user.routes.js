'use strict';
const router = require('express').Router();
const controller = require('../controllers/user.controller');
const ValidateJoi = require('../middleware/joiValidator.middleware');
const { create, update } = require('../validators/user.validator');

router.get(`/`, controller.all);
router.get('/:id', controller.getById);
router.post(`/`, ValidateJoi(create), controller.create);
router. put('/:id', ValidateJoi(update), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;