const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project_3_test");

const productsSeed = [
    {
        product_name: "Rebel At Heart Coat",
        product_price: 298.00,
        product_color: "Leopard Combo",
        product_type: "Jackets",
        product_sku: 53083754,
        product_image: "images/jackets/rebel at heart.jpeg",
        product_description: "Textured knit coat featured in a classic collared longline style with a wild leopard print."
    },
    {
        product_name: "Jae Jacket",
        product_price: 330.00,
        product_color: "Sand",
        product_type: "Jackets",
        product_sku: 51396919,
        product_image: "client/public/images/jackets/jae.jpeg",
        product_description: "Vintage-inspired faux suede coat featuring oh-so soft statement faux shearling lining and trim."
    },
    {
        product_name: "Golden Hour Dolman Jacket",
        product_price: 198.00,
        product_color: "Teddy Combo",
        product_type: "Jackets",
        product_sku: 52623899,
        product_image: "client/public/images/jackets/golden hour dolman.jpeg",
        product_description: "Plush fleece dolman jacket featured in a colorful mixed pattern with patched zip pockets."
    },
    {
        product_name: "Carmella Fur Coat",
        product_price: 398.00,
        product_color: "Tan Combo",
        product_type: "Jackets",
        product_sku: 51924405,
        product_image: "client/public/images/jackets/carmella fur.jpeg",
        product_description: "Plush faux fur jacket featured in a double-breasted style with a colorful printed design."
    },
    {
        product_name: "Sherpa Trucker Coat",
        product_price: 98.00,
        product_color: "Ivory",
        product_type: "Jackets",
        product_sku: 50228451,
        product_image:"client/public/images/jackets/sherpa.jpeg",
        product_description: "Oversized and slouchy trucker jacket featured in a fuzzy faux-sherpa."
    },
    {
        product_name: "Doma Studded Biker Jacket",
        product_price: 1100.00,
        product_color: "Black",
        product_type: "Jackets",
        product_sku: 37989266,
        product_image: "client/public/images/jackets/doma studded.jpeg",
        product_description: "Equal parts edgy and chic, this so-soft leather biker jacket features beautiful craftsmanship and a classically cool silhouette. Studded details along the sleeves make for an inspired moto look. Exposed zip closure and two front zip pockets. Zip accents at the sleeve cuffs for an effortless fit."
    },
    {
        product_name: "Meg Leather Jacket",
        product_price: 850.00,
        product_color: "Red",
        product_type: "Jackets",
        product_sku: 49821705,
        product_image: "client/public/images/jackets/meg red leather.jpeg",
        product_description: "Made from an oh-so soft luxe leather, this edgy jacket features allover metal stud detailing." 
    },
    {
        product_name: "Chelsea Platform Sandal",
        product_price: 168.00,
        product_color: "Snake",
        product_type: "Shoes",
        product_sku: 52620697,
        product_image: "client/public/images/shoes/chelsea platform.jpeg",
        product_description: "Spanish-made bold snake print platform sandals featuring a strappy design with belted details."
    },
    {
        product_name: "Tai Platform Menswear",
        product_price: 425.00,
        product_color: "Multi",
        product_type: "Shoes",
        product_sku: 53312161,
        product_image: "client/public/images/shoes/tai platform.jpeg",
        product_description: "Chunky platform loafers featured in a menswear-inspired silhouette with a printed calf hair upper and belted tongue."
    },
    {
        product_name: "Elisa Velvet Sneaker",
        product_price: 168.00,
        product_color: "Emerald",
        product_type: "Shoes",
        product_sku: 52823606,
        product_image: "client/public/images/shoes/elisa velvet.jpeg",
        product_description: "Italian-made retro-style chunky sneakers featuring a shining velvet upper and lace-up front."
    },
    {
        product_name: "Barclay Ankle Boot",
        product_price: 168.00,
        product_color: "Tan Snake",
        product_type: "Shoes",
        product_sku: 51049005,
        product_image: "client/public/images/shoes/barclay snakeskin.jpeg",
        product_description: "Classic western-inspired leather boots featuring a curved top edge and a tall block heel."
    },
    {
        product_name: "Friday Night Platform Boot",
        product_price: 198.00,
        product_color: "Green Suede",
        product_type: "Shoes",
        product_sku: 49143019,
        product_image: "client/public/images/shoes/friday night platform.jpeg",
        product_description: "Make a statement in these retro suede boots featuring a sky-high platform heel with a slim fitting mid-calf rise."
    },
    {
        product_name: "Sidelines Footbed Sandal",
        product_price: 78.00,
        product_color: "Viola",
        product_type: "Shoes",
        product_sku: 50135482,
        product_image: "client/public/images/shoes/sidelines.jpeg",
        product_description: "Spanish-made faux snakeskin sandals featuring wide crisscross straps and a contoured footbed."
    },
    {
        product_name: "Indio Mocc Boot",
        product_price: 598.00,
        product_color: "Freedom Flower",
        product_type: "Shoes",
        product_sku: 52133451,
        product_image: "client/public/images/shoes/indio mocc boot.jpeg",
        product_description: "Italian made pastel patterned suede boots featured in a moccasin-inspired style with an over-the-knee fit, fringe trim and belted details."
    },
    {
        product_name: "Nichola Heel Boot",
        product_price: 178.00,
        product_color: "Leopard",
        product_type: "Shoes",
        product_sku: 49764301,
        product_image: "client/public/images/shoes/nikola leopard.jpeg",
        product_description: "Chic suede ankle boots featured in a mid-calf design with rounded toes and a chunky block heel."
    },
    {
        product_name: "Genie Pants",
        product_price: 178.00,
        product_color: "Mars Batik",
        product_type: "Pants",
        product_sku: 49764301,
        product_image: "client/public/images/pants/genie.jpeg",
        product_description: "Printed and lightweight harem pants featured in a slouchy silhouette."
    },
    {
        product_name: "Sayde Slouchy Pant",
        product_price: 198.00,
        product_color: "Deep Olive Camo",
        product_type: "Pants",
        product_sku: 52482296,
        product_image: "client/public/images/pants/sayde slouchy.jpeg",
        product_description: "Slouchy cotton joggers from NSF featuring a camo print and slim-fitting tapered legs."
    },
    {
        product_name: "Psychedelic Jogger",
        product_price: 300.00,
        product_color: "Pink",
        product_type: "Pants",
        product_sku: 49973118,
        product_image: "client/public/images/pants/psychedelic jogger.jpeg",
        product_description: "Comfy tie dye joggers featured in a slouchy silhouette."
    },
    {
        product_name: "Remi Pant",
        product_price: 129.00,
        product_color: "Black Noir",
        product_type: "Pants",
        product_sku: 52960143,
        product_image: "client/public/images/pants/remi.jpeg",
        product_description: "Standout in these polka dotted printed pants featured in a straight-leg silhouette."
    },
    {
        product_name: "Flynn Trousers",
        product_price: 118.00,
        product_color: "Wild Flower",
        product_type: "Pants",
        product_sku: 49140106,
        product_image: "client/public/images/pants/flynn trouser.jpeg",
        product_description: "Soft and lightweight, these trousers are featured in a striped pattern."
    },
    {
        product_name: "Nex Leather Leggings",
        product_price: 500.00,
        product_color: "Scarlet Saga",
        product_type: "Pants",
        product_sku: 47208871,
        product_image: "client/public/images/pants/nex leather.jpeg",
        product_description: "Luxe leather leggings featured in a high-rise silhouette."
    },
    {
        product_name: "Pull On Corduroy Flare",
        product_price: 78.00,
        product_color: "Envy Green",
        product_type: "Pants",
        product_sku: 33186198,
        product_image: "client/public/images/pants/Cord Flare.jpeg",
        product_description: "A twist on FP fave, the Pull on Kick Flares, these stretchy pull-on flared cords feature faux closures in front and a streamlined elastic waistband."     
    },
    {
        product_name: "Harper Printed Pull On Pants",
        product_price: 98.00,
        product_color: "Spring Jewels",
        product_type: "Pants",
        product_sku: 50259670,
        product_image: "client/public/images/pants/harper.jpeg",
        product_description: "Floral printed pull-on pants featured in a flare silhouette."
    }



    db.Project.collection.insertMany(projectSeed)
    .then(dbModel => {
        console.log(dbModel)
    })
    .catch(err => console.log(err));