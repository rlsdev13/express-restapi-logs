'use strict';
const router = require('express').Router();
const controller = require('../controllers/user.controller');
const Validator = require('../middleware/validator');
const { create, update } = require('../validators/user.validator');

router.get(`/`, controller.all);
router.get('/:id', controller.getById);
router.post(`/`, Validator(create), controller.create);
router. put('/:id', Validator(update), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;