const books = require('./bookshelf');

const assert = require('assert');

const expected_result = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  return books
    .filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .sort((a, b) =>
      a.author.name != b.author.name ? (a.author.name < b.author.name ? -1 : 1) : 0
    ).map((book) => `${book.author.name}`);
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expected_result);
