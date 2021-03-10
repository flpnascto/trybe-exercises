# Filter Operators
## Conteúdo
Vamos aumentar o poder de nossas queries no MongoDB através do uso de operadores de filtro e como eles ajudam na recuperação dos dados das coleções.

Filtrar dados é uma das principais ações realizadas em bancos de dados. Então, para tirar o máximo proveito disso e conseguir fazer boas buscas, é necessário conhecer os diferentes operadores de filtro que podem ser utilizados em suas consultas.
## Objetivos
- Utilizar os operadores de comparação `$lt`, `$lte`, `$gt`, `$gte`, `$eq`, `$ne`, `$in` e `$nin`;
- Utilizar os operadores lógicos `$not` e `$nor`;
- Compor filtros avançados com `$and` e `$or`;
- Utilizar o operador `$exists`;
- Utilizar o método `sort()`;
- Remover documentos.

## Exercícios
Para os exercícios a seguir, utilizaremos um dataset que contém dados de Super-Heróis. Faça o download do arquivo JSON [aqui](https://course.betrybe.com//back-end/mongodb/superheroes.json).

<details>
  <summary>1. Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.</summary>

```
mongoimport --db class --collection superheroes <caminho_do_arquivo>
  ```
 ```
use class;

db.superheroes.count();
  ``` 

</details>
<details>
  <summary>2. Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.</summary>

```
db.superheroes.find({ "aspects.height": { $lt: 180 } })
  ```

</details>
<details>
  <summary>3. Retorne o total de super-heróis menores que 1.80m.</summary>

```
db.superheroes.find({ "aspects.height": { $lt: 180 } }).count()
  ```

</details>
<details>
  <summary>4. Retorne o total de super-heróis com até 1.80m.</summary>

```
db.superheroes.find({ "aspects.height": { $lte: 180 } }).count()

  ```

</details>
<details>
  <summary>5. Selecione um super-herói com 2.00m ou mais de altura.</summary>

```
db.superheroes.findOne({ "aspects.height": { $gte: 180 } })
  ```

</details>
<details>
  <summary>6. Retorne o total de super-heróis com 2.00m ou mais.</summary>

```
db.superheroes.find({ "aspects.height": { $gte: 180 } }).count()
  ```

</details>
<details>
  <summary>7. Selecione todos os super-heróis que têm olhos verdes.</summary>

```
db.superheroes.find({ "aspects.eyeColor": "green" })
  ```

</details>
<details>
  <summary>8. Retorne o total de super-heróis com olhos azuis.</summary>

```
db.superheroes.find({ "aspects.eyeColor": "blue" }).count()
  ```

</details>
<details>
  <summary>9. Utilizando o operador <code>$in</code> , selecione todos os super-heróis com cabelos pretos ou carecas (<code>"No Hair"</code>).</summary>

```
db.superheroes.find({ "aspects.hairColor": { $in: ["black", "No Hair"] } })
  ```

</details>
<details>
  <summary>10. Retorne o total de super-heróis com cabelos pretos ou carecas (<code>"No Hair"</code>).</summary>

```
db.superheroes.find({ "aspects.hairColor": { $in: ["black", "No Hair"] } }).count()
  ```

</details>
<details>
  <summary>11. Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.</summary>

```
db.superheroes.find({ "aspects.hairColor": { $nin: ["black", "No Hair"] } }).count()
  ```

</details>
<details>
  <summary>12. Utilizando o operador <code>$not</code> , retorne o total de super-heróis que não tenham mais de 1.80m de altura.</summary>

```
db.superheroes.find({ "aspects.height": { $not: { $gt: 180 } } }).count()
  ```

</details>
<details>
  <summary>13. Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m .</summary>

```
db.superheroes.find({$and: [{ race: { $nin:["Human"] } }, { "aspects.height": { $not: { $gt: 180 } } }] })
  ```

</details>
<details>
  <summary>14. Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.</summary>

```
db.superheroes.find({ $and: [{ "aspects.height": { $in: [180, 200] } }, { publisher: "Marvel Comics" }] }) 
  ```

</details>
<details>
  <summary>15. Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.</summary>

```
db.superheroes.find({ $and: [{ "aspects.weight": { $gte: 80 } }, { "aspects.weight": { $lte: 100 } }, { publisher: { $nin: ["DC Comics"] } }, { race: { $in: ["Human", "Mutant"] } } ]})
  ```

</details>
<details>
  <summary>16. Retorne o total de documentos que não contêm o campo race.</summary>

```
db.superheroes.find({ race: { $exists: true } }).count()
  ```

</details>
<details>
  <summary>17. Retorne o total de documentos que contêm o campo hairColor.</summary>

```
b.superheroes.find({ "aspects.hairColor": { $exists: true } }).count()
  ```

</details>
<details>
  <summary>18. Remova apenas um documento publicado pela Sony Pictures.</summary>

```
db.getCollection("superheroes").deleteOne({ publisher: "Sony Pictures" })
  ```

</details>
<details>
  <summary>19. Remova todos os documentos publicados pelo George Lucas.</summary>

```
db.getCollection("superheroes").deleteMany({ publisher: "George Lucas" })
  ```

</details>
