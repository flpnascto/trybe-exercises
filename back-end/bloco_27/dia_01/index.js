const express = require('express')
const app = express()
const port = 3000

const User = require('./models/User');

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/user', async (req, res) => {
  const users = await User.getAll();
  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const user = User.findById(id);

  if (!user) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado"
  });

  res.status(200).json(user);
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const erroMessage = User.isValid(firstName, lastName, email, password);
  if (erroMessage !== '') return res.status(404).json({ error: true, message: erroMessage });

  await User.create(firstName, lastName, email, password);
  res.status(201).json({ message: 'Usuário criado com sucesso!' })

});

app.listen(port, () => console.log(`Online`))