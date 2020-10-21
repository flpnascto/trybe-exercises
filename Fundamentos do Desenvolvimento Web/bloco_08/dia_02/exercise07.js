const books = require('./bookshelf');

const assert = require('assert');

const expected_result = 'O Senhor dos Anéis';

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).

function authorWith3DotsOnName() {
  let intentAuthorName = '';
  const authors = books.map((book) => `${book.author.name}`);
  const x = authors.forEach((author) => {
    const splitAuthorNames = author.split(' ');
    if (splitAuthorNames.filter((splitAuthorName) => splitAuthorName.endsWith('.')).length >= 3) {
      intentAuthorName = splitAuthorNames.join(' ');
    }
  });

  return books
    .filter((book) => book.author.name === intentAuthorName)
    .map((book) => `${book.name}`)[0];
}
// console.log(authorWith3DotsOnName());
assert.deepStrictEqual(authorWith3DotsOnName(), expected_result);
