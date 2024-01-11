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
    return "The game was a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    return "Computer wins!";
  } else {
    return "You win!";
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i <= 25; i++) {
    let result = determineWinner(userChoice, computerChoice);
    console.log(result);

    if (playerScore === 3 || computerScore === 3) {
      break;
    }

    if (result === "You win!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }

    console.log(
      "Player Score " + playerScore,
      "Computer Score " + computerScore
    );

    if (playerScore === 3 || computerScore === 3) {
      break;
    }

    // new user choice
    userChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    console.log(userChoice);
    // new computer choice
    computerChoice = getComputerChoice();
    console.log(computerChoice);
  }
  endGame(playerScore, computerScore);
}

function endGame(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("You won the game! " + playerScore + " " + computerScore);
  } else if (playerScore < computerScore) {
    console.log("You lost the game! " + playerScore + " " + computerScore);
  } else {
    console.log("The game was a tie! " + playerScore + " " + computerScore);
  }
}

playGame();
