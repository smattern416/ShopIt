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
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO products (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO products (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", TRUE, "Misty", 10);

INSERT INTO products (name, has_pet)
VALUES ("Peter", false);