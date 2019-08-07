const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductTable = new Schema({
    product_name: String,
    product_price: Number,
    product_color: String,
    product_type: String,
    product_sku: Number, 
    product_image: String,
    product_description: String
});
   
const Product = mongoose.model("product", ProductTable);


module.exports = Product