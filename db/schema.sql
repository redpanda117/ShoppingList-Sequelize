CREATE DATABASE shopping_db;
USE shopping_db;
CREATE TABLE items (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    item_name VARCHAR(100),
    got BOOLEAN DEFAULT False,
    date TIMESTAMP default CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

