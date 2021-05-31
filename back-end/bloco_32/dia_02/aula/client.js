const net = require('net');
const client = new net.Socket();
const stdin = process.openStdin();

const PORT = 2501;


client.connect(PORT, 'localhost', () => {
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();

    client.write(message);
  })
})

client.on('data', (data) => {
  console.log(data.toString('utf-8'));
})

client.write('Olá servidor!');