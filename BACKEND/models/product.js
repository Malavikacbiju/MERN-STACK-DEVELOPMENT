const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    price:Number,
    description:String,
    image:String
})
const Product = mongoose.model('products',productSchema)
module.exports = Product