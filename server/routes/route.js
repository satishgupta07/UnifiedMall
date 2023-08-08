const express = require('express')
const router = express.Router();
const {userSignup, userLogin} = require('../controller/user-controller.js');
const { getProducts, getProductById } = require('../controller/product-controller.js');

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

module.exports = router;