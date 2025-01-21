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
// function getUserChoice() {
//   let userChoice = prompt("Rock, paper, or scissors?");
//   while (options.indexOf(userChoice.toLowerCase()) === -1) {
//   const options = ["rock", 'paper', 'scissors'];
//     alert("not a valid option. Please select rock, paper, or scissors");
//     userChoice = prompt("Rock, paper, or scissors?");
//   }
//     return userChoice.toLowerCase();
//   }

// Create a function to play a round
function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  if ((userChoice == "rock") && (computerChoice == "paper")) {
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "paper") && (computerChoice == "scissors")) {
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "scissors") && (computerChoice == "rock")) {
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "rock") && (computerChoice == "scissors")) {
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if ((userChoice == "paper") && (computerChoice == "rock")) {
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if ((userChoice == "scissors") && (computerChoice == "paper")) {
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if (userChoice == computerChoice) {
    alert("It's a tie!")
  }
}

// Create function to play the entire game
function playGame(numberOfRounds=5) {
  userScore = 0;
  computerScore = 0;
  alert(`Final score: User: ${userScore}, Computer: ${computerScore}`);
}

// Add event listeners to buttons
const playGameButton = document.querySelector("#play-game");
playGameButton.addEventListener("click", () => {
  playGame();
})

const rockButton = document.querySelector("#Rock");
rockButton.addEventListener("click", () => {
  playRound("rock");
});

const paperButton = document.querySelector("#Paper");
paperButton.addEventListener("click", () => {
  playRound("paper");
});

const scissorsButton = document.querySelector("#Scissors");
scissorsButton.addEventListener("click", () => {
  playRound("scissors");
});