module.exports = (io) => io.on('connection', (socket) => {
  let currentStars = 0;

  socket.on('starPost', () => {
    currentStars += 1;

    socket.broadcast.emit('updateStars', currentStars);
  });
});