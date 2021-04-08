const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const fs = require('fs').promises;
const tokenMiddleware = require('./tokenMiddleware')

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

app.get('/simpsons', rescue(async (req, res) => {
  req.tokenMiddleware;
  const apiData = await fs.readFile('./simpsons.json');
  res.json(JSON.parse(apiData));
}))

app.get('/simpsons/:id', rescue(async (req, res) => {
  const charId = req.params.id;

  const apiData = await fs.readFile('./simpsons.json');
  const apiDataJson = JSON.parse(apiData);

  const char = apiDataJson.find((e) => e.id == charId);
  // if (!char) throw { "error": "Id não encontrado", "code": 404 }

  if (!char) res.json([])
  res.json(char);
}))

app.post('/simpsons/', rescue(async (req, res) => {
  const { id, name } = req.body;

  const apiData = await fs.readFile('./simpsons.json');
  const apiDataJson = JSON.parse(apiData);

  if (apiDataJson.some((e) => e.id == id)) {
    throw { "error": "Id existente", "code": 400 }
  }

  const newChar = { "id": `${id}`, "name": `${name}` }
  apiDataJson.push(newChar);
  await fs.writeFile('./simpsons.json', JSON.stringify(apiDataJson));

  res.json({ ...newChar, "status": "Adicionado com sucesso!" })

}));

app.get('*', (req, res) => {
  throw { "error": "Endpoint não existente", "code": 404 }
})

app.use((err, req, res, next) => {

  if (err.code === 400) {
    res.status(400).json({ ...err })
  }

  if (err.code === 404) {
    res.status(404).json({ ...err })
  }

  res.status(500).json({ error: `Erro: ${err.message}` })
})

app.listen(3000);
