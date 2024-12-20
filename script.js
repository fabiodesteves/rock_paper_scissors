// Create a function to select a computer option
function getComputerOption() {
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
    alert("not a valid option. Please select rock, paper, or scissors")
  } else {
    return userChoice.toLowerCase()
  }
}
// Create a function to test user option vs computer option