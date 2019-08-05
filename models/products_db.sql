CREATE DATABASE products_db;

USE products_db;


CREATE TABLE products (
  
  product_name VARCHAR(30) NOT NULL,
  product_price DECIMAL(10,2),
  product_color VARCHAR(20) NOT NULL,
  product_size VARCHAR(20),
  product_type VARCHAR(30),
  product_sku INTEGER(10),
  product_quantity INTEGER(3)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Rebel At Heart Coat", 298.00, "Leopard Combo", "Large", "Jackets", 53083754, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Safari Camo Bandits Jacket", 225.00, "Camo", "Medium", "Jackets", 50849900, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Jae Jacket", 330.00, "Sand", "Small", "Jackets", 51396919, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Golden Hour Dolman Jacket", 198.00, "Teddy Combo", "Large", "Jackets", 52623899, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Carmella Fur Coat", 398.00, "Tan Combo", "Large", "Jackets", 51924405, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Sherpa Trucker Coat", 98.00, "Ivory", "X-Large", "Jackets", 50228451, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Doma Studded Biker Jacket", 1100.00, "Black", "Medium", "Jackets", 37989266, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Meg Leather Jacket", 850.00, "Red", "Small", "Jackets", 49821705, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Chelsea Platform Sandal", 168.00, "Snake", "EU 40", "Shoes", 52620697, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Tai Platform Menswear", 425.00, "Multi", "EU 38", "Shoes", 53312161, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Elisa Velvet Sneaker", 168.00, "Emerald", "EU 38", "Shoes", 52823606, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Barclay Ankle Boot", 168.00, "Tan Snake", "EU 41", "Shoes", 51049005, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Friday Night Platform Boot", 198.00, "Green Suede", "EU 39", "Shoes", 49143019, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Sidelines Footbed Sandal", 78.00, "Viola", "EU 40", "Shoes", 50135482, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Indio Mocc Boot", 598.00, "Freedom Flower", "EU 38", "Shoes", 52133451, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Nikola Heel Boot", 178.00, "Leopard", "EU 39", "Shoes", 49764301, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Genie Pants", 178.00, "Leopard", "EU 39", "Shoes", 49764301, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Sayde Slouchy Pant", 198.00, "Deep Olive Camo", "Medium", "Pants", 52482296, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Psychedelic Jogger", 300.00, "Pink", "Small", "Pants", 49973118, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Remi Pant", 129.00, "Black Noir", "XSmall", "Pants", 52960143, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Flynn Trousers", 118.00, "Wild Flower", "Large", "Pants", 49140106, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Nex Leather Leggings", 500.00, "Scarlet Saga", "Small", "Pants", 47208871, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Pull On Corduroy Flare", 78.00, "Envy Green", "28", "Pants", 33186198, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Harper Printed Pull On Pants", 98.00, "Spring Jewels", "Medium", "Pants", 50259670, 1);
