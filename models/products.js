const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const Account = new Schema({
    product_name: String,
    product_price: Integer,
    product_color: String,
    product_type: String,
    product_sku: Integer, 
    product_image:
    product_description: String
});
   

Product.plugin(passportLocalMongoose);

module.exports = mongoose.model('products', Product);