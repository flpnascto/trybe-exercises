/*
  SQL Exercise
  from: https://github.com/XD-DENG/SQL-exercise/tree/master/SQL_exercise_02
*/

-- LINK : https://en.wikibooks.org/wiki/SQL_Exercises/Employee_management
-----------------------------------------
-- Build the Schema
-----------------------------------------
CREATE database IF NOT EXISTS praticando;
USE praticando;

CREATE TABLE Departments (
  Code INTEGER PRIMARY KEY,
  Name varchar(255) NOT NULL ,
  Budget decimal NOT NULL 
);

CREATE TABLE Employees (
  SSN INTEGER PRIMARY KEY,
  Name varchar(255) NOT NULL ,
  LastName varchar(255) NOT NULL ,
  Department INTEGER NOT NULL , 
  foreign key (department) references Departments(Code) 
);

INSERT INTO Departments(Code,Name,Budget) VALUES(14,'IT',65000);
INSERT INTO Departments(Code,Name,Budget) VALUES(37,'Accounting',15000);
INSERT INTO Departments(Code,Name,Budget) VALUES(59,'Human Resources',240000);
INSERT INTO Departments(Code,Name,Budget) VALUES(77,'Research',55000);

INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('123234877','Michael','Rogers',14);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('152934485','Anand','Manikutty',14);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('222364883','Carol','Smith',37);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('326587417','Joe','Stevens',37);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('332154719','Mary-Anne','Foster',14);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('332569843','George','ODonnell',77);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('546523478','John','Doe',59);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('631231482','David','Smith',77);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('654873219','Zacary','Efron',59);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('745685214','Eric','Goldsmith',59);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('845657245','Elizabeth','Doe',14);
INSERT INTO Employees(SSN,Name,LastName,Department) VALUES('845657246','Kumar','Swamy',14);

-- 2.10 Select all the data of employees, including each employee's department's data.
SELECT *
FROM praticando.Employees AS e
JOIN praticando.Departments AS d
ON e.Department = d.Code;

-- 2.11 Select the name and last name of each employee, along with the name and budget of the employee's department.
SELECT e.Name, e.LastName, d.Name, d.Budget
FROM praticando.Employees AS e
JOIN praticando.Departments AS d
ON e.Department = d.Code;

-- 2.12 Select the name and last name of employees working for departments with a budget greater than $60,000.
SELECT e.Name, e.LastName, d.Budget
FROM praticando.Employees AS e
JOIN praticando.Departments AS d
ON e.Department = d.Code
HAVING d.Budget > 60000;

-- 2.14 Select the names of departments with more than two employees.
SELECT d.Name
FROM praticando.Employees AS e
JOIN praticando.Departments AS d
ON e.Department = d.Code
GROUP BY d.Code
HAVING COUNT(e.Name) > 2;