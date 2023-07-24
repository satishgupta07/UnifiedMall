const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname: { type: String, required: true, trim: true, min: 5, max:20},
    lastname: { type: String, required: true, trim: true, min: 5, max:20},
    username: { type: String, required: true, trim: true, unique: true, index: true, lowercase: true},
    email: { type: String, required: true, trim: true, unique: true, lowercase: true},
    password: { type: String, required: true},
    phone: { type: String, required: true}
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)