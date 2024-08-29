// Rock Paper Scissors

getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let pcChoice = Math.floor(Math.random() * choices.length);
  return choices[pcChoice];
};

getPlayerChoice = () => {
  let userChoice = prompt('rock, paper or scissors?');
  return userChoice
  
};

const computerChoice = getComputerChoice()
const playerChoice = getPlayerChoice().toLowerCase();

playerScore = 0;
computerScore = 0;

playRound = (computerChoice, playerChoice) =>  {
  if (computerChoice === playerChoice) {
    console.log("It's a draw! You both threw", computerChoice)
  } else if (
    (computerChoice === 'rock' && playerChoice === 'paper') ||
    (computerChoice === 'paper' && playerChoice === 'scissors') ||
    (computerChoice === 'scissors' && playerChoice === 'rock')
  ) {
    console.log(`You won! You threw ${playerChoice} and the computer threw ${computerChoice}`)
    playerScore ++
  } else {
    console.log(`You lost! You threw ${playerChoice} and the computer threw ${computerChoice}`)
    computerScore ++
  }
  console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
}

const playGame = () => {
 for (let i = 0; i < 5; i++) {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice().toLowerCase()
  playRound(computerChoice, playerChoice);
  }
};


playGame();