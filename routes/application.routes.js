'use strict';

const router = require('express').Router();

const controller = require('../controllers/application.controller');

router.get(`/`, controller.all);
router.get(`/:id`, controller.getById);
router.post(`/`, controller.create);
router.put(`/:id`, controller.update);
router.delete('/:id', controller.delete);

module.exports = router;