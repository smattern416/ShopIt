const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Product = new Schema({
    username: String,
    password: String
});

Product.plugin(passportLocalMongoose);

module.exports = mongoose.model('products', Account);