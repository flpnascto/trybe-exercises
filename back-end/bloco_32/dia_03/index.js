const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});

io.on('connection', (socket) => {
  console.log(`Cliente conectado. ID: ${socket.id} `);
});

app.use(express.static(__dirname + '/public'));

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/public');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});