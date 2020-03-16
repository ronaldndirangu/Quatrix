const express = require('express');
const tasksController = require('../controllers').tasks;

const router = express.Router();

router.get(
  '/tasks/assigned',
  tasksController.list
);

module.exports = router;
