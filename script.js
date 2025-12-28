let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("You lose!");
    computerScore++;
  }

  console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
}
