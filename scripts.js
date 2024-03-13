getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  const choices = ["rock", "paper", "scissors"];

  return choices[randomNumber];
};

playRound = (computerChoice, userChoice) => {
  if (computerChoice === userChoice) {
    return `It's a draw! You threw ${userChoice} and the computer threw ${computerChoice}`;
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    return `Congrats, you won! You threw ${userChoice} and the computer threw ${computerChoice}`;
  } else {
    return `Boo, you lost! You threw ${userChoice} and the computer threw ${computerChoice}`;
  }
};

let wins = 0;
let losses = 0;
let draws = 0;

playGame = () => {
  for (let i = 0; wins < 3 && losses < 3; i++) {
    userChoiceInput = prompt("Choose what you throw");
    userChoice = userChoiceInput.toLowerCase();
    computerChoice = getComputerChoice();
    result = playRound(computerChoice, userChoice);

    if (result.includes("won")) {
      wins++;
    } else if (result.includes("lost")) {
      losses++;
    } else {
      draws++;
    }
    console.log(result);
    console.log("Wins: ", wins);
    console.log("Losses: ", losses);
    console.log("Draws: ", draws);
    if (wins > 2) {
      console.log("You won!");
    } else if (losses > 2) {
      console.log("You lost!");
    }
  }
};

playGame();
