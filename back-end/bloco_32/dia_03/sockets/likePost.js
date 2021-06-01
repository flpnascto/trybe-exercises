module.exports = (io) => io.on('connection', (socket) => {
  let currentLikes = 0;

  socket.on('likePost', () => {
    currentLikes += 1;

    socket.emit('updateLikes', currentLikes);
  });
});