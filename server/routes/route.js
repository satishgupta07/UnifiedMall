const express = require('express')
const router = express.Router();
const {userSignup, userLogin} = require('../controller/user-controller.js');
const { getProducts, getProductById } = require('../controller/product-controller.js');
const { addPaymentGateway } = require('../controller/payment-controller.js');

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);

module.exports = router;