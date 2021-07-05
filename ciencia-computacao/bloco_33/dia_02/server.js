const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Chamada GET com sucesso!');
});

app.post('/', (req, res) => {
  const data = req.body;
  res.status(200).json(data);
});

app.listen(3000, () => console.log('Server online!'));
