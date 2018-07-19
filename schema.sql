CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(55),
  authid VARCHAR(55)
);

INSERT INTO users (name, authid) VALUES ('test', 'test123');

CREATE TABLE product
(
  id SERIAL PRIMARY KEY,
  type VARCHAR(55),
  price MONEY
);

INSERT INTO product (type, price) VALUES ('shoes', 10.99);
INSERT INTO product (type, price) VALUES ('pants', 100.99);
INSERT INTO product (type, price) VALUES ('shirts', 1.99);
INSERT INTO product (type, price) VALUES ('hats', 0.99);

