const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Express: HTTP com Node.js")
});

app.get('/ping', (req, res) => {
  res.json({ "message": "Pong!" })
})

app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) {
    res.status(200).json({ "message": `Hello, ${name}!` });
  }
  res.status(401).json({ "message": "Unauthorized" })
})

app.put('/users/:name/:age', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  res.json({
    "message": `Seu nome é ${name} e você tem ${age} anos de idade.`
  })
})

app.listen(3000);