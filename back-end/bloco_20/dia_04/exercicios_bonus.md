# Exercicios Bônus 20.4
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
  <summary>8. Altere a classificação da tabela <code>BoxOffice</code> para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.</summary>

```sql
SET SQL_SAFE_UPDATES = 0;

UPDATE Pixar.BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;
   ```

</details>
<details>
  <summary>9. Altere a classificação da tabela <code>BoxOffice</code> para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.</summary>

```sql
SET SQL_SAFE_UPDATES = 0;

UPDATE Pixar.BoxOffice
SET rating = 6.0
WHERE international_sales < 300000000 AND domestic_sales > 200000000;
   ```

</details>
<details>
  <summary>10. Exclua da tabela <code>Movies</code> todos os filmes com menos de 100 minutos de duração.</summary>

```sql
-- Verifica quais ids possuem filmes com menos de 100 minutos de duração
-- SELECT id FROM Pixar.Movies
-- WHERE length_minutes < 100;

DELETE FROM BoxOffice
WHERE movie_id IN (1, 6, 7, 8);
 
DELETE FROM Movies
WHERE id IN (1, 6, 7, 8);
   ```

</details>
