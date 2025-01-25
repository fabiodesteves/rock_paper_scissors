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

// Create a function to play a round
function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  if ((userChoice == "rock") && (computerChoice == "paper")) {
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
    computerScore++;
  } else if ((userChoice == "paper") && (computerChoice == "scissors")) {
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
    computerScore++;
  } else if ((userChoice == "scissors") && (computerChoice == "rock")) {
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
    computerScore++;
  } else if ((userChoice == "rock") && (computerChoice == "scissors")) {
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
    userScore++;
  } else if ((userChoice == "paper") && (computerChoice == "rock")) {
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
    userScore++;
  } else if ((userChoice == "scissors") && (computerChoice == "paper")) {
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
    userScore++;
  } else if (userChoice == computerChoice) {
    alert("It's a tie!");
  }
  displayScore();
  // Handle ending and restarting the game
  if ((userScore >= 5) || (computerScore >= 5)) {
    endGame();
  }
}

// Initialise the scores
let userScore = 0;
let computerScore = 0;
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");

resetScores();
displayScore();

// Function to reset scores when starting the game
function resetScores () {
  userScore = 0;
  computerScore = 0;
}

// Function to display the score
function displayScore() {
  userScoreDisplay.textContent = `Your score: ${userScore}`;
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
}

// Function to play game
function playGame() {
  addGameButtons();
  resetScores();
  displayScore();
}

// Add event listeners to buttons
const playGameButton = document.querySelector("#play-game");
playGameButton.addEventListener("click", () => {
  playGame();
  playGameButton.remove();
})


function addGameButtons() {
  const gameButtonsSection = document.querySelector("#game-buttons");

  const rockButton = document.createElement("button");
  rockButton.setAttribute("id", "rock");
  rockButton.textContent = "Rock";
  gameButtonsSection.append(rockButton);
  rockButton.addEventListener("click", () => { // Add listener immediately after creation
    playRound("rock");
  });

  const paperButton = document.createElement("button");
  paperButton.setAttribute("id", "paper");
  paperButton.textContent = "Paper";
  gameButtonsSection.append(paperButton);
  paperButton.addEventListener("click", () => { // Add listener immediately after creation
    playRound("paper");
  });

  const scissorsButton = document.createElement("button");
  scissorsButton.setAttribute("id", "scissors");
  scissorsButton.textContent = "Scissors";
  gameButtonsSection.append(scissorsButton);
  scissorsButton.addEventListener("click", () => { // Add listener immediately after creation
    playRound("scissors");
  });
}

// Function to end game
function endGame() {
  removeGameButtons(); // Function to remove rock, paper, scissors buttons
  createPlayAgainButton(); // Function to create and add "Play Again" button
}

function removeGameButtons() {
  const gameButtonsSection = document.querySelector("#game-buttons");
  gameButtonsSection.innerHTML = ''; // Clears all child elements from gameButtonsSection
}

function createPlayAgainButton() {
  const gameButtonsSection = document.querySelector("#game-buttons");
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again";
  playAgainButton.setAttribute("id", "play-again"); // Optional: set an ID if you need to select it later
  playAgainButton.addEventListener("click", () => {
    playGame(); // Call playGame to restart the game
    playAgainButton.remove(); // Remove the "Play Again" button after clicking
  });
  gameButtonsSection.append(playAgainButton);
}