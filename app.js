// accessing from html

const playerEl = document.getElementById("player");
const computerEl = document.getElementById("computer");
const resultEl = document.getElementById("result");
const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorbtn = document.getElementById("scissor");
const drawEl = document.getElementById("draw");
const playerwEl = document.getElementById("playerw");
const computerwEl = document.getElementById("computerw");

let playerChoice = "";
let computerChoice = "";
let result = "";
let draw = 0;
let playerWins = 0;
let computerWins = 0;
function computerChoose() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissor";
      break;
  }

  computerEl.textContent = `Computer : ${computerChoice}`;
}

function checkResult() {
  if (playerChoice === computerChoice) {
    result = "Draw!";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    result = "Player Lost!";
  } else if (playerChoice == "Rock" && computerChoice == "Scissor") {
    result = "Player Win!";
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    result = "Player Win!";
  } else if (playerChoice == "Paper" && computerChoice == "Scissor") {
    result = "Player Lost!";
  } else if (playerChoice == "Scissor" && computerChoice == "Rock") {
    result = "Player Lost!";
  } else if (playerChoice == "Scissor" && computerChoice == "Paper") {
    result = "Player Win!";
  } else {
    result = "Invalid!";
  }
  resultEl.textContent = `Result : ${result}`;
  if (result === "Draw!") {
    draw++;
  } else if (result === "Player Lost!") {
    computerWins++;
  } else if (result === "Player Win!") {
    playerWins++;
  } else {
    alert("invalid!");
  }
  drawEl.innerText = `Draw : ${draw}`;
  playerwEl.innerText = `Player : ${playerWins}`;
  computerwEl.innerText = `computer : ${computerWins}`;
}

rockbtn.addEventListener("click", () => {
  playerChoice = "Rock";
  playerEl.innerText = `Player: ${playerChoice}`;
  computerChoose();
  checkResult();
});

paperbtn.addEventListener("click", () => {
  playerChoice = "Paper";
  playerEl.innerText = `Player: ${playerChoice}`;
  computerChoose();
  checkResult();
});

scissorbtn.addEventListener("click", () => {
  playerChoice = "Scissor";
  playerEl.innerText = `Player: ${playerChoice}`;
  computerChoose();
  checkResult();
});

// const countEl = document.getElementById("count");
// const addbtn = document.getElementById("add");
// const subbtn = document.getElementById("sub");

// let counter = 0;

// function add() {
//   counter = counter + 1;
//   countEl.innerText = `Count is : ${counter}`;
// }

// function sub() {
//   counter = counter - 1;
//   countEl.innerText = `Count is : ${counter}`;
// }

// subbtn.addEventListener("click", sub);
// addbtn.addEventListener("click", add);
