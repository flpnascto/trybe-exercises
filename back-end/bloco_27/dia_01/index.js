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
  const user = await User.findById(id);

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

  const newUser = await User.create(firstName, lastName, email, password);
  // const newUserCreated = {
  //   id: newUser.ops[0]['_id'],
  //   firstName: newUser.ops[0].firstName,
  //   lastName: newUser.ops[0].lastName,
  //   email: newUser.ops[0].email
  // }

  // const newUserCreated = newUser.ops[0];
  // delete newUserCreated.password;

  const { password: _password, ...newUserCreated } = newUser.ops[0];
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
  console.log(userUpdated)
  res.status(200).json(userUpdated);


})

app.listen(port, () => console.log(`Online`))