const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/books', async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' })
  }
})

router.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const books = await Book.findByPk(id);

    if (!books) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' })
  }
})

module.exports = router;