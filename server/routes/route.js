const express = require('express')
const router = express.Router();
const {userSignup, userLogin} = require('../controller/user-controller.js');
const { getProducts } = require('../controller/product-controller.js');

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);

module.exports = router;