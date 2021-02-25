/*
  SQL Exercise
  from: https://github.com/XD-DENG/SQL-exercise/tree/master/SQL_exercise_01
*/

-- DATABASE
-- LINK: https://en.wikibooks.org/wiki/SQL_Exercises/The_computer_store
CREATE database IF NOT EXISTS praticando;
USE praticando;

CREATE TABLE Manufacturers (
  Code INTEGER,
  Name VARCHAR(255) NOT NULL,
  PRIMARY KEY (Code)   
);

CREATE TABLE Products (
  Code INTEGER,
  Name VARCHAR(255) NOT NULL ,
  Price DECIMAL NOT NULL ,
  Manufacturer INTEGER NOT NULL,
  PRIMARY KEY (Code), 
  FOREIGN KEY (Manufacturer) REFERENCES Manufacturers(Code)
) ENGINE=INNODB;

INSERT INTO Manufacturers(Code,Name) VALUES(1,'Sony');
INSERT INTO Manufacturers(Code,Name) VALUES(2,'Creative Labs');
INSERT INTO Manufacturers(Code,Name) VALUES(3,'Hewlett-Packard');
INSERT INTO Manufacturers(Code,Name) VALUES(4,'Iomega');
INSERT INTO Manufacturers(Code,Name) VALUES(5,'Fujitsu');
INSERT INTO Manufacturers(Code,Name) VALUES(6,'Winchester');

INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(1,'Hard drive',240,5);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(2,'Memory',120,6);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(3,'ZIP drive',150,4);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(4,'Floppy disk',5,6);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(5,'Monitor',240,1);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(6,'DVD drive',180,2);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(7,'CD drive',90,2);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(8,'Printer',270,3);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(9,'Toner cartridge',66,3);
INSERT INTO Products(Code,Name,Price,Manufacturer) VALUES(10,'DVD burner',180,2);

-- 1.10 Select all the data from the products, including all the data for each product's manufacturer.
SELECT *
FROM praticando.Manufacturers AS m
INNER JOIN praticando.Products AS p
ON m.code = p.Manufacturer;

-- 1.11 Select the product name, price, and manufacturer name of all the products.
SELECT p.Name, p.Price, m.Name
FROM praticando.Manufacturers AS m
INNER JOIN praticando.Products AS p
ON m.code = p.Manufacturer;

-- 1.12 Select the average price of each manufacturer's products, showing only the manufacturer's code.
SELECT m.code, AVG(p.price) AS 'Average_price'
FROM praticando.Manufacturers AS m
INNER JOIN praticando.Products AS p
ON m.code = p.Manufacturer
GROUP BY m.code;

-- 1.13 Select the average price of each manufacturer's products, showing the manufacturer's name.
SELECT m.name, AVG(p.price) AS 'Average_price'
FROM praticando.Manufacturers AS m
INNER JOIN praticando.Products AS p
ON m.code = p.Manufacturer
GROUP BY m.name;

-- 1.14 Select the names of manufacturer whose products have an average price larger than or equal to $150.
SELECT m.name, AVG(p.price) AS 'Average_price'
FROM praticando.Manufacturers AS m
INNER JOIN praticando.Products AS p
ON m.code = p.Manufacturer
GROUP BY m.name
HAVING AVG(p.price) >= 150;