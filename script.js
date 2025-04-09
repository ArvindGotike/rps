let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(userMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (userMove === computerMove) {
    result = "tie.";
  } else if (
    (computerMove === "scissors" && userMove === "rock") ||
    (computerMove === "rock" && userMove === "paper") ||
    (computerMove === "paper" && userMove === "scissors")
  ) {
    result = "you win.";
  } else {
    result = "you lose.";
  }

  if (result === "you win.") {
    score.wins += 1;
  } else if (result === "you lose.") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();

  document.body.querySelector(".js-move")
    .innerHTML = `your choice: ${userMove} - computer choice: ${computerMove}`;
  document.body.querySelector(".js-result").innerHTML = `${result}`;
}

function updateScoreElement() {
  document.querySelector(".js-score")
    .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}
