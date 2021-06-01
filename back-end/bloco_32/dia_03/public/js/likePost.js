const socket = window.io();

document.querySelector('#likeIcon').addEventListener('click', () => {
  socket.emit('likePost');
});

socket.on('updateLikes', (currentLikes) => {
  document.querySelector('#currentLikes').innerHTML = currentLikes;
})