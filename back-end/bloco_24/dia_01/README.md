# Updates Simples
## Conteúdo
Depois de entender e praticar bastante como inserir e buscar dados no **MongoDB** , você vai aprender como alterar esses dados através dos métodos e operadores disponíveis para isso.

Não adianta apenas armazenar dados e recuperá-los. Certamente você vai precisar alterá-los também de forma adequada! Updates vão te ajudar a dar manutenção contínua e deixar seus dados sempre atualizados.
Outro ponto muito importante, do ponto de vista do **MongoDB** , é saber utilizar os métodos, operadores e modificadores corretos para cada necessidade, evitando que operações complexas sobrecarreguem seu banco de dados.
## Objetivos
- Utilizar o método `updateOne()`;
- Utilizar o método `updateMany()`;
- Utilizar os operadores `$set` , `$mul` , `$inc` , `$min` , `$max` e `$currentDate`;
- Renomear campos;
- Remover campos.
## Exercícios
Conecte-se à sua instância do **MongoDB** local e insira os seguintes documentos na coleção `movies` do banco de dados `class`:
<details>
  <summary>documentos</summary>

```
{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}
  ```
</details>
<details>
  <summary>1. Altere o imdbRating para 7.7 no filme Batman.</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $set:
    { imdbRating: 7.7 }
  }
)
  ```
</details>
<details>
  <summary>2. Altere budget para 1 no filme Godzilla.</summary>

```
db.movies.updateOne(
  { title: "Godzilla"},
  { $set:
    { budget: 1 }
  }
)
  ```
</details>
<details>
  <summary>3. Altere budget para 15 e imdbRating para 5.5 no filme Home Alone.</summary>

```
db.movies.updateOne(
  { title: "Home Alone"},
  { $set: {
    budget: 15,
    imdbRating: 5.5
  }
  }
)
  ```
</details>
<details>
  <summary>4. Aumente em 2 o imdbRating do filme Batman.</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $inc:
    { imdbRating: 2 }
  }
)
  ```
</details>
<details>
  <summary>5. Aumente em 5 o budget do filme Home Alone.</summary>

```
db.movies.updateOne(
  { title: "Home Alone"},
  { $inc:
    { budget: 5 }
  }
)
  ```
</details>
<details>
  <summary>6. Multiplique por 4 o imdbRating do filme Batman.</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $mul:
    { imdbRating: 5 }
  }
)
  ```
</details>
<details>
  <summary>7. Renomeie o campo budget para estimatedBudget do filme Batman.</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $rename:
    { budget: "estimatedBudget" }
  }
)
  ```
</details>
<details>
  <summary>8. Utilize o operador `$min` para alterar o budget para 5 do filme Home Alone.</summary>

```
db.movies.updateOne(
  { title: "Home Alone"},
  { $min:
    { budget: 5 }
  }
)

  ```
</details>
<details>
  <summary>9. Utilize o operador `$max` para alterar o imdbRating para 8.6 do filme Godzilla . Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla.</summary>

```
db.movies.updateOne(
  { title: "Godzilla"},
  { $max:
    { imdbRating: 8.6 },
    $set: {
      category: ["action", "thriller", "sci-fi"]
    }
  }
)
  ```
</details>
<details>
  <summary>10. Utilizando o operador `$currentDate`, crie um campo chamado lastUpdated com o tipo timestamp no filme Home Alone </summary>

```
db.movies.updateOne(
  { title: "Home Alone"},
  { $currentDate:
    { lastUpdated: { $type: "timestamp" } }
  }
)
  ```
</details>
<details>
  <summary>11. Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos</summary>

```
db.movies.updateMany(
  {},
  { $set: { sequels: 0 } }
)
  ```
</details>
<details>
  <summary>12. Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.</summary>

```
db.movies.updateMany(
  {},
  { $unset: { budget: "", estimatedBudget: "" } }
)
  ```
</details>
<details>
  <summary>13. Para os filmes Batman ou Home Alone ,atribua a imdbRating o valor 17, caso o valor de imdbRating seja menor que 17.</summary>

```
db.movies.updateOne(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $min:
    { imdbRating: 17 }
  }
)
  ```
</details>
