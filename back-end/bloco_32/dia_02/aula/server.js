const net = require('net');

const PORT = 2501;

let countGuests = 0;
let sockets = [];

const broadcastMessages = (from, message) => {
  sockets.forEach((socket) => {
    if (socket.id === from) return;
    socket.write(message);
  });
};

const server = net.createServer((socket) => {
  // console.log('conectado');
  // socket.write('conectado!');
  countGuests += 1;

  socket.id = `Guest_${countGuests}`;
  socket.write(`Bem vindo, ${socket.id}`);

  broadcastMessages(socket.id, `${socket.id} entrou na conversa!`);

  sockets.push(socket);

  socket.on('data', (data) => {
    const message = data.toString();
    console.log('chegou uma nova mensagem!');
    // socket.write(`Enviando messagem: ${message}`);

    const messageToSent = `${socket.id}: ${message}`;
    broadcastMessages(socket.id, messageToSent);
  });

  socket.on('end', () => {
    const message = `${socket.id} saiu da conversa`;

    broadcastMessages(socket.id, message);
  })
});

server.listen(PORT, () => console.log('processo na porta: ', PORT));