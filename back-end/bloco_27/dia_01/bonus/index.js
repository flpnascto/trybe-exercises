require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');


const PORT = process.env.DB_PORT;
console.log('Porta', PORT)

const app = express();


const User = require('./Models/User')

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/user', async (req, res) => {
  const users = await User.getAll();
  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  console.log('id', id)
  const user = await User.findById(id);
  console.log('user', user)

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

  const newId = await User.create(firstName, lastName, email, password);
  const newUserCreated = {
    id: newId,
    firstName,
    lastName,
    email,
  }

  res.status(201).json(newUserCreated);

});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  console.log('tipo: ', typeof id)
  const userExists = await User.findById(id);

  if (!userExists) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado"
  });

  const { firstName, lastName, email, password } = req.body;

  const erroMessage = User.isValid(firstName, lastName, email, password);
  if (erroMessage !== '') return res.status(404).json({ error: true, message: erroMessage });

  const userToUpdate = { firstName, lastName, email, password }

  const userUpdated = await User.updateUser(id, userToUpdate)
  console.log('index user', userUpdated)
  res.status(200).json(userUpdated);
})


app.listen(PORT, () => console.log('Online'));
