const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: { type: String, required: true, unique: true },
    url: { type: String},
    detailUrl: { type: String},
    title: { type: Object },
    price: { type: Object },
    quantity: { type: Number},
    description: { type: String },
    discount: { type: String },
    tagline: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('product', productSchema)