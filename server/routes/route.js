const express = require('express')
const router = express.Router();
const userSignup = require('../controller/user-controller.js')

router.post('/signup', userSignup);

module.exports = router;