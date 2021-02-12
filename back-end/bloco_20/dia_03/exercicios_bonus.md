# Exercícios Bônus 20.3
<details>
  <summary>Banco de Dados</summary>

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name) 
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),    
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),       
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
   ```
<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/3.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.
</details>

<details>
  <summary>1. Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra <code>e</code> em seu nome.</summary>

```sql
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';
   ```

</details>

<details>
  <summary>2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra <code>A</code>. Ordene o resultado em ordem alfabética.</summary>

```sql
SELECT Name FROM Scientists.Projects
WHERE Code LIKE 'A%'
ORDER BY Name;
   ```

</details>

<details>
  <summary>3. Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número <code>3</code>. Ordene o resultado em ordem alfabética.</summary>

```sql
SELECT * FROM Scientists.Projects
WHERE Code LIKE '%3'
ORDER BY Name;
   ```

</details>

<details>
  <summary>4. Escreva uma query para exibir todos os cientistas cujos projetos sejam <code>AeH3</code> , <code>Ast3</code> ou <code>Che1</code>.</summary>

```sql
SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');
   ```

</details>

<details>
  <summary>5. Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.</summary>

```sql
SELECT * FROM Scientists.Projects
WHERE Hours > 500;
   ```

</details>

<details>
  <summary>6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.</summary>

```sql
SELECT * FROM Scientists.Projects
WHERE Hours > 250 AND Hours < 800;
   ```

</details>

<details>
  <summary>7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome <strong>NÃO</strong> inicie com a letra<code>A</code>.</summary>

```sql
SELECT Code, Name FROM Scientists.Projects
WHERE Name NOT LIKE 'A%';
   ```

</details>

<details>
  <summary>8. Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra <code>H</code>.</summary>

```sql
SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';
   ```

</details>
