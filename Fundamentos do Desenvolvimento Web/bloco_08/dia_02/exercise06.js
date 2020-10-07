const books = require('./bookshelf');

const assert = require('assert');

const expected_result = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
]


// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
  return books.filter((book) => 2020 - book.releaseYear > 60).map((book) => `${book.name}`)
}

assert.deepStrictEqual(oldBooks(), expected_result);
