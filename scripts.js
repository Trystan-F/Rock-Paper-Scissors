function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

let computerChoice = getComputerChoice();

let userChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
console.log(userChoice);
console.log(computerChoice);

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("The game was a tie.");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Computer wins!");
  } else {
    console.log("You win!");
  }
}
determineWinner(userChoice, computerChoice);
