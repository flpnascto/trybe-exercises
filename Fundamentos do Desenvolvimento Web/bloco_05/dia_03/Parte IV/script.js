var personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

let buttonOne = document.querySelectorAll('button')[0];
buttonOne.addEventListener('click', goDark);

let inputName = document.querySelector('#name');
inputName.addEventListener('keyup', typeAndScream);

let buttonTwo = document.querySelectorAll('button')[1];
buttonTwo.addEventListener('click', complainMessage);

let buttonThree = document.querySelectorAll('button')[2];
buttonThree.addEventListener('click', finishTheStory)