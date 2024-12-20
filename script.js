// Create a function to select a computer option
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3); // returns 0, 1, or 2
  if (randomInt === 0) {
    return "rock";
  } else if (randomInt === 1) {
    return "paper";
  } else if (randomInt === 2) {
    return "scissors";
  }
}
// Create a function to get a user option
function getUserChoice() {
  let userChoice = prompt("Rock, paper, or scissors?");
  const options = ["rock", 'paper', 'scissors'];
  if (options.indexOf(userChoice.toLowerCase()) === -1) {
    alert("not a valid option. Please select rock, paper, or scissors");
  } else {
    return userChoice.toLowerCase();
  }
}

// Initialise computer and user scores with 0
let computerScore = 0;
let userScore = 0;

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

// Create a function to play a round
function playRound(userChoice, computerChoice) {
  if ((userChoice == "rock") && (computerChoice == "paper")) {
    computerScore++;
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "paper") && (computerChoice == "scissors")) {
    computerScore++;
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "scissors") && (computerChoice == "rock")) {
    computerScore++;
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "rock") && (computerChoice == "scissors")) {
    userScore++;
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if ((userChoice == "paper") && (computerChoice == "rock")) {
    userScore++;
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if ((userChoice == "scissors") && (computerChoice == "paper")) {
    userScore++;
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if (userChoice == computerChoice) {
    alert("It's a tie!")
  }
}
