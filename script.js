"use strict";
const computer = document.getElementById("computer");
const user = document.getElementById("user");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let userResult;

buttons.forEach(button => {
  button.addEventListener("click", e => {
    userChoice = e.target.id;
    user.innerHTML = userChoice;
    getComputerChoice();
    showUserResult();
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * buttons.length + 1);
  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  computer.innerHTML = computerChoice;
}

function showUserResult() {
  if (computerChoice === "Rock" && userChoice === "Paper") {
    userResult = "You Win!";
  } else if (computerChoice === "Paper" && userChoice === "Rock") {
    userResult = "You Lost!";
  } else if (computerChoice === "Rock" && userChoice === "Scissors") {
    userResult = "You Lost!";
  } else if (computerChoice === "Scissors" && userChoice === "Rock") {
    userResult = "You Win!";
  } else if (computerChoice === "Paper" && userChoice === "Scissors") {
    userResult = "You Win!";
  } else if (computerChoice === "Scissors" && userChoice === "Paper") {
    userResult = "You Lost!";
  } else if (computerChoice === "Rock" && userChoice === "Paper") {
    userResult = `You Win!`;
  } else {
    userResult = "It's a draw!";
  }
  result.innerHTML = userResult;
}
