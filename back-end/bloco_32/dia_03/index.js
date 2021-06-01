const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/public');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});