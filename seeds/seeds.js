const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project_3_test");

const productsSeed = [
    {
        product_name: "Rebel At Heart Coat",
        product_price: 298.00,
        product_color: "Leopard Combo",
        // product_size: ""
        product_type: "Jackets",
        product_sku: 53083754,
        product_image: "images/jackets/rebel at heart.jpeg",
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



    db.Project.collection.insertMany(projectSeed)
    .then(dbModel => {
        console.log(dbModel)
    })
    .catch(err => console.log(err));