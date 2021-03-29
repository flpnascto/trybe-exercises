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
  const { name } = req.body;
  res.json({ "menssage": `Hello, ${name}!` })
})

app.listen(3000);