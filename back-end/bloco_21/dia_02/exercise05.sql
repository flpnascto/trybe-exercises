/*
  SQL Exercise
  from: https://github.com/XD-DENG/SQL-exercise/tree/master/SQL_exercise_03
*/

-- The Warehouse
-- lINK: https://en.wikibooks.org/wiki/SQL_Exercises/The_warehouse
CREATE database IF NOT EXISTS praticando;
USE praticando;

CREATE TABLE Warehouses (
   Code INTEGER NOT NULL,
   Location VARCHAR(255) NOT NULL ,
   Capacity INTEGER NOT NULL,
   PRIMARY KEY (Code)
 );
CREATE TABLE Boxes (
    Code CHAR(4) NOT NULL,
    Contents VARCHAR(255) NOT NULL ,
    Value REAL NOT NULL ,
    Warehouse INTEGER NOT NULL,
    PRIMARY KEY (Code),
    FOREIGN KEY (Warehouse) REFERENCES Warehouses(Code)
 ) ENGINE=INNODB;
 
  INSERT INTO Warehouses(Code,Location,Capacity) VALUES(1,'Chicago',3);
 INSERT INTO Warehouses(Code,Location,Capacity) VALUES(2,'Chicago',4);
 INSERT INTO Warehouses(Code,Location,Capacity) VALUES(3,'New York',7);
 INSERT INTO Warehouses(Code,Location,Capacity) VALUES(4,'Los Angeles',2);
 INSERT INTO Warehouses(Code,Location,Capacity) VALUES(5,'San Francisco',8);
 
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('0MN7','Rocks',180,3);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('4H8P','Rocks',250,1);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('4RT3','Scissors',190,4);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('7G3H','Rocks',200,1);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('8JN6','Papers',75,1);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('8Y6U','Papers',50,3);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('9J6F','Papers',175,2);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('LL08','Rocks',140,4);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('P0H6','Scissors',125,1);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('P2T6','Scissors',150,2);
 INSERT INTO Boxes(Code,Contents,Value,Warehouse) VALUES('TU55','Papers',90,5);

--3.7 Select the code of each box, along with the name of the city the box is located in.
SELECT
  code,
  (
    SELECT location
    FROM praticando.Warehouses
    WHERE Warehouses.code = Boxes.Warehouse
  ) As location
FROM praticando.Boxes;

--3.8 Select the warehouse codes, along with the number of boxes in each warehouse.
    -- Optionally, take into account that some warehouses are empty (i.e., the box count should show up as zero, instead of omitting the warehouse from the result).
SELECT Location,
  (
    SELECT COUNT(code)
    FROM praticando.Boxes
    WHERE Boxes.Warehouse = Warehouses.Code
    GROUP BY Boxes.Warehouse
    ) AS 'Number_of_Boxes'
FROM praticando.Warehouses;
--3.9 Select the codes of all warehouses that are saturated (a warehouse is saturated if the number of boxes in it is larger than the warehouse's capacity).
SELECT Code FROM praticando.Warehouses
WHERE (
    SELECT COUNT(*)
    FROM praticando.Boxes
    WHERE Boxes.Warehouse = Warehouses.Code
    ) > praticando.Warehouses.Capacity;

--3.10 Select the codes of all the boxes located in Chicago.
SELECT code FROM praticando.Boxes
WHERE Boxes.Warehouse IN (
    SELECT Code FROM praticando.Warehouses
    WHERE Location = 'Chicago'
);