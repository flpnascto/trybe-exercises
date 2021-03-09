# MongoDB - Introdução
## Conteúdo
Hoje você vai aprender o que é o **MongoDB**, como instalá-lo, conectar-se a ele e executar comandos de leitura/escrita. Também vai aprender sobre tipos de instalação, conceitos de databases, coleções, operadores e documentos.
## Objetivo
- Instalar e conectar-se ao MongoDB
- Listar databases e coleções
- Executar operações de escrita ( inserts ) no banco de dados
- Utilizar o método find() ;
- Utilizar o método count() ;
- Utilizar filtros simples;
- Limitar a quantidade de documentos retornados;
- "Pular" documentos;
- Utilizar a projeção;
- Fazer uma paginação simples combinando o métodos limit() e o skip() .
## Exercícios
O MongoDb possui diversas ferramentas como, por exemplo, mongo, mongosh, Compass e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries , o importante é realizá-las.
Utilizando a coleção `bios`, construa queries para retornar os seguintes itens:
<details>
  <summary>Database bios</summary>

```json
db.bios.insertMany([
   {
       "_id" : 1,
       "name" : {
           "first" : "John",
           "last" : "Backus"
       },
       "birth" : ISODate("1924-12-03T05:00:00Z"),
       "death" : ISODate("2007-03-17T04:00:00Z"),
       "contribs" : [
           "Fortran",
           "ALGOL",
           "Backus-Naur Form",
           "FP"
       ],
       "awards" : [
           {
               "award" : "W.W. McDowell Award",
               "year" : 1967,
               "by" : "IEEE Computer Society"
           },
           {
               "award" : "National Medal of Science",
               "year" : 1975,
               "by" : "National Science Foundation"
           },
           {
               "award" : "Turing Award",
               "year" : 1977,
               "by" : "ACM"
           },
           {
               "award" : "Draper Prize",
               "year" : 1993,
               "by" : "National Academy of Engineering"
           }
       ]
   },
   {
       "_id" : ObjectId("51df07b094c6acd67e492f41"),
       "name" : {
           "first" : "John",
           "last" : "McCarthy"
       },
       "birth" : ISODate("1927-09-04T04:00:00Z"),
       "death" : ISODate("2011-12-24T05:00:00Z"),
       "contribs" : [
           "Lisp",
           "Artificial Intelligence",
           "ALGOL"
       ],
       "awards" : [
           {
               "award" : "Turing Award",
               "year" : 1971,
               "by" : "ACM"
           },
           {
               "award" : "Kyoto Prize",
               "year" : 1988,
               "by" : "Inamori Foundation"
           },
           {
               "award" : "National Medal of Science",
               "year" : 1990,
               "by" : "National Science Foundation"
           }
       ]
   },
   {
       "_id" : 3,
       "name" : {
           "first" : "Grace",
           "last" : "Hopper"
       },
       "title" : "Rear Admiral",
       "birth" : ISODate("1906-12-09T05:00:00Z"),
       "death" : ISODate("1992-01-01T05:00:00Z"),
       "contribs" : [
           "UNIVAC",
           "compiler",
           "FLOW-MATIC",
           "COBOL"
       ],
       "awards" : [
           {
               "award" : "Computer Sciences Man of the Year",
               "year" : 1969,
               "by" : "Data Processing Management Association"
           },
           {
               "award" : "Distinguished Fellow",
               "year" : 1973,
               "by" : " British Computer Society"
           },
           {
               "award" : "W. W. McDowell Award",
               "year" : 1976,
               "by" : "IEEE Computer Society"
           },
           {
               "award" : "National Medal of Technology",
               "year" : 1991,
               "by" : "United States"
           }
       ]
   },
   {
       "_id" : 4,
       "name" : {
           "first" : "Kristen",
           "last" : "Nygaard"
       },
       "birth" : ISODate("1926-08-27T04:00:00Z"),
       "death" : ISODate("2002-08-10T04:00:00Z"),
       "contribs" : [
           "OOP",
           "Simula"
       ],
       "awards" : [
           {
               "award" : "Rosing Prize",
               "year" : 1999,
               "by" : "Norwegian Data Association"
           },
           {
               "award" : "Turing Award",
               "year" : 2001,
               "by" : "ACM"
           },
           {
               "award" : "IEEE John von Neumann Medal",
               "year" : 2001,
               "by" : "IEEE"
           }
       ]
   },
   {
       "_id" : 5,
       "name" : {
           "first" : "Ole-Johan",
           "last" : "Dahl"
       },
       "birth" : ISODate("1931-10-12T04:00:00Z"),
       "death" : ISODate("2002-06-29T04:00:00Z"),
       "contribs" : [
           "OOP",
           "Simula"
       ],
       "awards" : [
           {
               "award" : "Rosing Prize",
               "year" : 1999,
               "by" : "Norwegian Data Association"
           },
           {
               "award" : "Turing Award",
               "year" : 2001,
               "by" : "ACM"
           },
           {
               "award" : "IEEE John von Neumann Medal",
               "year" : 2001,
               "by" : "IEEE"
           }
       ]
   },
   {
       "_id" : 6,
       "name" : {
           "first" : "Guido",
           "last" : "van Rossum"
       },
       "birth" : ISODate("1956-01-31T05:00:00Z"),
       "contribs" : [
           "Python"
       ],
       "awards" : [
           {
               "award" : "Award for the Advancement of Free Software",
               "year" : 2001,
               "by" : "Free Software Foundation"
           },
           {
               "award" : "NLUUG Award",
               "year" : 2003,
               "by" : "NLUUG"
           }
       ]
   },
   {
       "_id" : ObjectId("51e062189c6ae665454e301d"),
       "name" : {
           "first" : "Dennis",
           "last" : "Ritchie"
       },
       "birth" : ISODate("1941-09-09T04:00:00Z"),
       "death" : ISODate("2011-10-12T04:00:00Z"),
       "contribs" : [
           "UNIX",
           "C"
       ],
       "awards" : [
           {
               "award" : "Turing Award",
               "year" : 1983,
               "by" : "ACM"
           },
           {
               "award" : "National Medal of Technology",
               "year" : 1998,
               "by" : "United States"
           },
           {
               "award" : "Japan Prize",
               "year" : 2011,
               "by" : "The Japan Prize Foundation"
           }
       ]
   },
   {
       "_id" : 8,
       "name" : {
           "first" : "Yukihiro",
           "aka" : "Matz",
           "last" : "Matsumoto"
       },
       "birth" : ISODate("1965-04-14T04:00:00Z"),
       "contribs" : [
           "Ruby"
       ],
       "awards" : [
           {
               "award" : "Award for the Advancement of Free Software",
               "year" : "2011",
               "by" : "Free Software Foundation"
           }
       ]
   },
   {
       "_id" : 9,
       "name" : {
           "first" : "James",
           "last" : "Gosling"
       },
       "birth" : ISODate("1955-05-19T04:00:00Z"),
       "contribs" : [
           "Java"
       ],
       "awards" : [
           {
               "award" : "The Economist Innovation Award",
               "year" : 2002,
               "by" : "The Economist"
           },
           {
               "award" : "Officer of the Order of Canada",
               "year" : 2007,
               "by" : "Canada"
           }
       ]
   },
   {
       "_id" : 10,
       "name" : {
           "first" : "Martin",
           "last" : "Odersky"
       },
       "contribs" : [
           "Scala"
       ]
   }

] )
  ```
from: [The bios Example Collection](https://docs.mongodb.com/manual/reference/bios-example-collection/)
</details>
<details>
  <summary>1. Retorne o documento com <code>_id</code> igual a 8.</summary>
  
 ```
 db.bios.find({ _id: 8 })
   ```

</details>
<details>
  <summary>2. Retorne o documento com <code>_id</code> igual a 8, mas só exiba os campos: <code>_id</code> e <code>name</code>.</summary>
  
 ```
 db.bios.find({ _id: 8 }, { name: 1 })
   ```

</details>
<details>
  <summary>3. Retorne apenas os campos <code>name</code> e <code>birth</code> do documento com <code>_id</code> igual a 8.</summary>
  
 ```
db.bios.find({ _id: 8}, { _id: 0, name: 1, birth: 1 })
   ```

</details>
<details>
  <summary>4. Retorne todos os documentos em que o campo <code>name.first</code> seja igual a John , utilizando o método <code>pretty()</code>.</summary>
  
 ```
db.bios.find( {'name.first': "John" })
   ```

</details>
<details>
  <summary>5. Retorne os 3 primeiros documentos da coleção bios utilizando o método <code>pretty()</code> .</summary>
  
 ```
db.bios.find().limit(3)
   ```

</details>
<details>
  <summary>6. Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.</summary>
  
 ```
db.bios.find().limit(2).skip(5)
   ```

</details>

Utilizando o [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/) , importe o arquivo [books.json](https://course.betrybe.com//back-end/mongodb/books.json) para a sua instância local do MongoDB e utilize a coleção books para construir queries para as seguintes questões:
<details>
