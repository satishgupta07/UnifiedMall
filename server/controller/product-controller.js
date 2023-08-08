const { request } = require('express');
const Product = require('../models/product.js');

const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.status(200).json({ products });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

const getProductById = async (request, respone) => {
    try {
        const id = request.params.id;
        const product = await Product.findOne({ 'id': id});

        respone.status(200).json(product);
    } catch (error) {
        respone.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProducts,
    getProductById
};