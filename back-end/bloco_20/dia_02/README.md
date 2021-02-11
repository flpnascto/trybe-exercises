# Banco de Dados SQL
## Conteúdo
A razão pela qual uma base de dados existe é para que alguém, ou algum programa, faça pesquisas nela. As pesquisas, principalmente o comando `SELECT` , são como o café da manhã para alguém que tem costume de tomá-lo todo dia: sem ele você não vai muito longe.
Como foi dito na aula anterior, quando você se conecta a um banco de dados, você tem a opção de fazer boa parte das suas pesquisas e manipulação de dados usando ferramentas gráficas, que estão disponíveis para uso e download. O **MySQL Workbench** , visto na última aula, faz exatamente isso. No entanto, é importante que você tenha uma base sólida do **SQL** para que possa entregar **resultados bem específicos** e fazer pesquisas em situações em que você não disponha de uma ferramenta gráfica.
Para ser capaz de montar suas pesquisas personalizadas, você precisa saber usar o comando `SELECT` . Então vamos lá!
## Objetivos
* Compreender o que é uma _query_ SQL e quais são seus tipos de comando
* Gerar valores com `SELECT`
* Selecionar colunas individualmente com `SELECT`
* Renomear e gerar colunas em uma consulta com `AS`
* Concatenar colunas e valores com `CONCAT`
* Remover dados duplicados em uma consulta com `DISTINCT`
* Contar a quantidade de resultados em uma consulta com `COUNT`
* Limitar a quantidade de resultados em uma consulta com `LIMIT`
* Pular resultados em uma consulta com `OFFSET`
* Ordernar os resultados de uma consulta com `ORDER BY`
## Exercícios

<details>
  <summary> Banco de Dados</summary>
  
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
  
<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/3.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>

</details>
<details>
  <summary>1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".</summary>
  
</details>  
<details>
  <summary>2. Escreva uma query para exibir três números em três colunas.</summary>

</details>
<details>
  <summary>3. Escreva uma query para exibir a soma dos números 10 e 15.</summary>

</details>
<details>
  <summary>4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.</summary>

</details>
<details>
  <summary>5. Escreva uma query para exibir todas as informações de todos os cientistas.</summary>

</details>
<details>
  <summary>6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.</summary>

</details>
<details>
  <summary>7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.</summary>

</details>
<details>
  <summary>8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.</summary>

</details>
<details>
  <summary>9 .Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.</summary>

</details>
<details>
  <summary>10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.</summary>

</details>
<details>
  <summary>11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.</summary>

</details>
<details>
  <summary>12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.</summary>

</details>
<details>
  <summary>13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

</details>
<details>
  <summary>14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

</details>
<details>
  <summary>15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

</details>
