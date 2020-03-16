const express = require('express');
const authController = require('../controllers').auth;

const router = express.Router();

router.post(
  '/personnel/signup',
  authController.signUp
);

router.post(
  '/personnel/login',
  authController.login
);

module.exports = router;
