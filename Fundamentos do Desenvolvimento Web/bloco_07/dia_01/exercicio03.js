let clickCount = 0;

document.getElementById('button-click').addEventListener('click', () => {
  clickCount += 1;
  document.getElementById('number-clicks').innerText = clickCount;
});
