const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let play = true;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function pop() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up')
    if (play) {
      pop()
    };
  }, time);
}

function playGame() {
  scoreBoard.textContent = 0;
  play = true;
  score = 0;
  pop();
  setTimeout(() => play = false, 20000)
}

function addScore(event) {
  if (!event.isTrusted()) {
    return;
  }

  score++;
  this.classList.remove('up');
  scoreBoard.textContent = parseInt(score);
}


moles.forEach(mole => mole.addEventListener('click', addScore));
