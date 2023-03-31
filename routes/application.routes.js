'use strict';
const router = require('express').Router();
const controller = require('../controllers/application.controller');
const Validator = require('../middleware/validator');
const { create } = require('../validators/application.validator');

router.get(`/`, controller.all);
router.get(`/:id`, controller.getById);
router.post(`/`, Validator(create), controller.create);
router.put(`/:id`, Validator(create), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;