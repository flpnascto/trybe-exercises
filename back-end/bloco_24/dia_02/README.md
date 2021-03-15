# Updates Complexos - Arrays - Parte 1
## Conteúdo
Continuando com os métodos `update`, hoje você vai aprender como inserir e alterar `arrays`.

Os `arrays` são uma estrutura muito importante no contexto da modelagem de dados do **MongoDB**. Além de enriquecer os dados, essas estruturas também são responsáveis pelo "relacionamento" entre os dados. Aqui a palavra **relacionamento** aparece entre aspas porque, mesmo o MongoDB sendo um banco de dados **não relacional**, você sempre terá algum tipo de relação entre seus dados.

Com os `arrays`, você pode criar estruturas que simulam o relacionamento `1:N` (um pra muitos), e o **MongoDB** oferece um conjunto muito bom de operadores para que o trabalho com `arrays` fique mais simples e preciso!
## Objetivos
- Incorporar dados aos documentos através de `arrays`;
- Utilizar os operadores `$pop`, `$pull` e `$push`;
- Utilizar o operador `$addToSet`;
- Utilizar os operadores `$each`, `$slice` e `$sort`.
## Exercícios
<details>
  <summary>1. Adicione a categoria "superhero" ao filme Batman</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $push: { category: "superhero"}}
)
  ```

</details>
<details>
  <summary>2. Utilizando o modificador `$each`, adicione as categorias "villain" e "comic-based" ao filme Batman</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $push: { category: {
    $each: ["villian", "comic-based"]
  }}}
)
  ```

</details>
<details>
  <summary>3. Remova a categoria "action" do filme Batman</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $pull: { category: "action" } }
)
  ```

</details>
<details>
  <summary>4. Remova o primeiro elemento do array category do filme Batman</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $pop: { category: -1 } }
)
  ```

</details>
<details>
  <summary>5. Remova o último elemento do array category do filme Batman</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $pop: { category: 1 } }
)
  ```

</details>
<details>
  <summary>6. Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique.</summary>

```
db.movies.updateOne(
  { title: "Batman"},
  { $addToSet: { category: "action"}}
)
  ```

</details>
<details>
  <summary>7. Adicione a categoria "90's" aos filmes Batman e Home Alone</summary>

```
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $push: { category: "90's"}}
)
  ```

</details>
<details>
  <summary>8. Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:</summary>

```json
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
  ```

```
db.movies.updateOne(
  { title: "Home Alone" },
  { $push: { cast: { $each: [
      {
        "actor": "Macaulay Culkin",
        "character": "Kevin"
      },
      {
        "actor": "Joe Pesci",
        "character": "Harry"
      },
      {
        "actor": "Daniel Stern"
      }
  ]}}}
)
  ```

</details>
<details>
  <summary>9. Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone.</summary>

```
db.movies.updateOne(
  { title: "Home Alone" },
  { $set: { "cast.$[elemento].character": "Mav" }},
  { arrayFilters: [ { "elemento.actor": "Daniel Stern" }]}
)
  ```

</details>
<details>
  <summary>10. Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:</summary>

```json
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}

  ```

```
db.movies.updateOne(
  { title: "Batman" },
  { $push: { cast: { $each: [
      {
        "character": "Batman"
      },
      {
        "character": "Alfred"
      },
      {
        "character": "Coringa"
      }
  ]}}}
)
  ```

</details>
<details>
  <summary>11. Produza três querys para o filme Batman</summary>
<ul>
<li>Adicione o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman;</li>

```
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Batman"
  },
  { $push: { "cast.$.actor": "Christian Bale" } }
)
  ```
<li>Adicione o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred;</li>

```
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Alfred"
  },
  { $push: { "cast.$.actor": "Michael Caine" } }
)
  ```
<li>Adicione o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa.</li>

```
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Coringa"
  },
  { $push: { "cast.$.actor": "Heath Ledger" } }
)
  ```
</ul>
</details>
<details>
  <summary>12. Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética.</summary>

```
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Batman"
  },
  {
    $push: { 
      "cast.$.actor": { $each: [
        "Michael Keaton",
        "Val Kilmer",
        "George Clooney"
      ],
      $sort: 1
  }}}
)
  ```

</details>
