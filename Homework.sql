DROP DATABASE IF EXISTS bamazon; 

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY (item_id)
);

select * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung 32' UltraThin VGA Monitor", "Electronics", 392.29, 220);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keurig K250 Single Serve Coffee Maker", "Kitchen Goods", 123.00, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("6 Pc Decorative Candles- Mini Cactus", "Home Decor", 6.00, 99);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("10k Rose Gold Morganite And Diamond Halo Ring", "Accessories", 182.99, 54);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Women's Novelty Socks-Avocado", "Women's Clothing", 8.00, 305);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vintage Bedside Analog Alarm Clock", "Home Decor", 52.83, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Figure 8 Posture Corrector", "Sports and Recreation", 30.00, 189);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cosy Manto Teapot", "Kitchen Goods", 115.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DSW Molded Lightweight Plastic Shell Chair", "Furniture", 29.99, 39);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stig Yellow Backpack", "Accessories", 129.00, 340);

select * from products;
 



