const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
// const Book = require('./models/Book');

app.use(bodyParser.json())

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id)

  if (!author) return res.status(404).json({ message: "Not Found!" });

  res.status(200).json(author);
})

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;
  if (!Author.isValid(firstName, middleName, lastName)) return res.status(404).json({ message: 'Dados inválidos' });

  await Author.create(firstName, middleName, lastName);
  res.status(201).json({ message: 'Autor criado com sucesso!' })

})

/*
app.get('/books', async (req, res) => {
  const { authorId } = req.body;
  let books = []

  if (authorId === undefined) {
    books = await Book.getAll();
  } else {
    books = await Book.getByAuthorId(authorId);
  }

  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: "Not Found!" });

  res.status(200).json(book)
})
*/

app.listen(port, () => console.log(`Online`))