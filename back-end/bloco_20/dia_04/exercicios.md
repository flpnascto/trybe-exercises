# Exercicios 20.4
<details>
  <summary>Banco de Dados</summary>

```sql
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
   ```         
</details>
<details>
  <summary>1. Insira as produções da Pixar abaixo na tabela <code>Movies</code>:</summary>
  
- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

```sql
INSERT INTO Pixar.Movies (title, director, year, length_minutes)
VALUES ("Monstros SA", "Pete Docter", 2001, 92),
       ("Procurando Nemo", "John Lasseter", 2003, 107),
       ("Os Incríveis", "Brad Bird", 2004, 116),
       ("WALL-E", "Pete Docter", 2008, 104);
   ```

</details>
<details>
  <summary>2. Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela <code>BoxOffice</code>.</summary>

```sql
SET @id = (SELECT id FROM Pixar.Movies WHERE Pixar.Movies.title = "Procurando Nemo");

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (@id, 6.8, 450000000, 370000000);
   ```

</details>
<details>
  <summary>3. O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o <code>UPDATE</code>.</summary>

```sql
SET @key_column = (SELECT id FROM Pixar.Movies WHERE title = "Procurando Nemo");

UPDATE Pixar.Movies
SET director = "Andrew Staton"
WHERE id = @key_column;
   ```

</details>
<details>
  <summary>4. O título do filme "Ratatouille" esta escrito de forma incorreta na tabela <code>Movies</code>, além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o <code>UPDATE</code>.</summary>

```sql
SET @key_column = (SELECT id FROM Pixar.Movies WHERE title = "ratatui");

UPDATE Pixar.Movies
SET title = "Ratatouille", year = 2007
WHERE id = @key_column;
   ```

</details>
<details>
  <summary>5. Insira as novas classificações abaixo na tabela `BoxOffice`, lembre-se que a coluna <code>movie_id</code> é uma foreign key referente a coluna <code>id</code> da tabela <code>Movies</code>:</summary>
  
- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

```sql
SET @idA = (SELECT id FROM Pixar.Movies WHERE Pixar.Movies.title = "Monstros SA");
SET @idB = (SELECT id FROM Pixar.Movies WHERE Pixar.Movies.title = "Os Incríveis");
SET @idC = (SELECT id FROM Pixar.Movies WHERE Pixar.Movies.title = "WALL-E");

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (@idA, 8.5, 300000000, 250000000),
       (@idB, 7.4, 460000000, 510000000),
       (@idC, 9.9, 290000000, 280000000);
   ```

</details>
<details>
  <summary>6. Exclua da tabela <code>Movies</code> o filme "WALL-E".</summary>

```sql
SET @key_column = (SELECT id FROM Pixar.Movies WHERE title = "WALL-E");

DELETE FROM Pixar.BoxOffice
WHERE movie_id = @key_column;

DELETE FROM Pixar.Movies
WHERE id = @key_column;
   ```

</details>
<details>
  <summary>7. Exclua da tabela <code>Movies</code> todos os filmes dirigidos por "Andrew Staton".</summary>

```sql
-- Verifica quais ids possuem o diretor Andrew Staton
-- SELECT id FROM Movies
-- WHERE director = "Andrew Staton";

-- Deleta as linhas correspondentes ao retorno do SELECT acima
DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);
 
DELETE FROM Movies
WHERE id IN (2, 9);
   ```

</details>
