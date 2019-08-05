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
VALUES ("Rebel At Heart Coat", 298.00, "Leopard Combo", "Large", "Jackets", 53083754, 1);

INSERT INTO products (product_name, product_price, product_color, product_size, product_type, product_sku, product_quantity)
VALUES ("Rebel At Heart Coat", 298.00, "Leopard Combo", "Large", "Jackets", 53083754, 1);
