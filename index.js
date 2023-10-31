let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function getComputerChoice(value1, value2) {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 1) {
    return rock;
  } else if (randomNumber === 2) {
    return paper;
  } else {
    return scissors;
  }
}

function oneRound(input1, input2) {
  playerSelection = playerSelection.toLowerCase();

  const choices = ["rock", "paper", "scissors"];

  if (!choices.includes(playerSelection)) {
    return "Invalid Selection. Please chose rock, paper, or scissors";
  }

  computerSelection = choices[computerSelection];

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// white space

function game(playerSelection) {
  playerSelection = playerSelection.toLowerCase();

  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * 3)];

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
