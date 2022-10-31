CREATE DATABASE IF NOT EXISTS  companydb;

USE companydb;

CREATE TABLE employes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employes;

INSERT INTO employes  VALUES 
(1, 'John', 1000),
(2, 'Peter', 2000),
(3, 'Mary', 3000),
(4, 'Steve', 4000),
(5, 'Bill', 5000);

