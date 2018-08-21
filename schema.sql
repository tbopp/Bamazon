DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(5) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price FLOAT(2,4) NOT NULL,
  stock_quantity INT(11) NOT NULL

  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Couch", "Furniture", 999.99, 12);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 1199.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("External Hard Drive", "Electronics", 99.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('OLED 21.5" Monitor', "Electronics", 799.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Computer Desk", "Furniture", 299.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Wireless Mouse", "Electronics", 19.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Wireless Keyboard", "Electronics", 15.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Coffee Mug", "Houseware", 4.99, 80);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dinner Plate 6-Set", "Houseware", 18.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Glassware Tall 6-Set", "Houseware", 12.99, 25);