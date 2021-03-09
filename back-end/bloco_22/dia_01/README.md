# Transformando ideias em um modelo de banco de dados
## Conteúdo
Hoje você estará focado em aprender, da forma mais sucinta possível, todo o processo de **como modelar um banco de dados**. Dentro desse processo de modelagem, vamos abordar como idealizar uma estrutura ideal, tendo em mente um problema que precisa ser resolvido. Será ensinado ainda como identificar entidades, como montar um diagrama de entidade-relacionamento e como produzir uma estrutura adequada a partir disso.
## Objetivo
- Modelar um banco de dados;
- Identificar **entidades** , **atributos** e **relacionamentos**;
- Construir um **diagrama entidade-relacionamento** (diagrama ER);
- Criar um banco de dados;
- Criar e modelar tabelas com base em um diagrama ER.
## Exercício

Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
- Nome;
- Espécie;
- Sexo;
- Idade;
- Localização.

Cada animal também possui um cuidador, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador. Siga os passos aprendidos no dia de hoje para modelar essa base de dados.
<details>
  <summary>Resposta</summary>
  
```sql
CREATE DATABASE IF NOT EXISTS zologico;

USE zologico;

CREATE TABLE gerentes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES gerentes (id)
);

CREATE TABLE especies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  especie VARCHAR(50) NOT NULL
);

CREATE TABLE animais (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  sexo CHAR(1) NOT NULL,
  idade INT NOT NULL,
  loclizacao VARCHAR(50) NOT NULL,
  especie_id INT NOT NULL,
  cuidador_id INT NOT NULL,
  FOREIGN KEY (especie_id) REFERENCES especies (id),
  FOREIGN KEY (cuidador_id) REFERENCES cuidadores (id)
);

CREATE TABLE responsabilidades (
cuidador_id INT NOT NULL,
especie_id INT NOT NULL,
PRIMARY KEY(cuidador_id, especie_id),
FOREIGN KEY (cuidador_id) REFERENCES animais (id),
FOREIGN KEY (especie_id) REFERENCES cuidadores (id)
);
  ```
</details>
  
