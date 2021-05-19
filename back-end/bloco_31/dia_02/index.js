const express = require('express');
const bookController = require('./controllers/bookController');


const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Exercício Bloco 31 dia 02');
});

app.use('/', bookController);

app.listen(PORT, () => console.log(`App online na porta ${PORT}`));