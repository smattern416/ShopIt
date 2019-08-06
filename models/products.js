const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const productsSeed = [
    {
        product_name: "Rebel At Heart Coat",
        product_price: 298.00,
        product_color: "Leopard Combo",
        // product_size: ""
        product_type: "Jackets",
        product_sku: 53083754,
        product_image: "/Users/stephaniemattern/Desktop/ShopIt/client/public/images/jackets/rebel at heart.jpeg",
        // product_quantity: 
    },
    {
        product_name: "Jae Jacket",
        product_price: 330.00,
        product_color: "Sand",
        // product_size: ""
        product_type: "Jackets",
        product_sku: 51396919,
        // product_quantity: 
    },
    {
        product_name: "Golden Hour Dolman Jacket",
        product_price: 198.00,
        product_color: "Teddy Combo",
        // product_size: ""
        product_type: "Jackets",
        product_sku: 52623899,
        // product_quantity:  
    }

    {

    }
    // username: String,
    // password: String,
    // product_name: String,
    // product_price DECIMAL(10,2),
    // product_color VARCHAR(20) NOT NULL,
    // product_size VARCHAR(20),
    // product_type VARCHAR(30),
    // product_sku INTEGER(10),
    // product_quantity INTEGER(3)
    }
];

Product.plugin(passportLocalMongoose);

module.exports = mongoose.model('products', Product);