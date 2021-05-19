const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/books', async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.route('/book/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const books = await Book.findByPk(id);

      if (!books) return res.status(404).json({ message: 'Livro não encontrado' });

      return res.status(200).json(books);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    try {
      const [updateBook] = await Book.update(
        { title, author, pageQuantity },
        { where: { id } },
      );

      console.log(updateBook);
      if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

      return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      const deleteBook = await Book.destroy({ where: { id } });

      console.log(deleteBook);

      return res.status(200).json({ message: 'Livro removido com sucesso!' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });

router.post('/book', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;