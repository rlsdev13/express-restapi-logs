'use strict';

const router = require('express').Router();

const controller = require('../controllers/logs.controller');

router.get(`/`, controller.all);
router.post(`/`, controller.create);

module.exports = router;