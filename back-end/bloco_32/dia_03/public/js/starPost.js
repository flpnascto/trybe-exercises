// const socket = window.io();

document.querySelector('#starIcon').addEventListener('click', () => {
  const currentStarsElement = document.querySelector('#currentStars');
  const currentStars = parseInt(currentStarsElement.innerHTML);

  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost');
})