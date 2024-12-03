const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },  
    imageUrl:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
 
})

const Product = mongoose.model('products', productSchema);
module.exports = Product;
