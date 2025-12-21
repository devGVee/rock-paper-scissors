function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?");
  choice = choice.toLowerCase();
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You Win. Rock beats Scissors.");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Win. Paper beats Rock.");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You Win. Scissors beats Paper.");
      humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("You lose. Rock beats Scissors.");
      computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("You lose. Paper beats Rock.");
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("You lose. Scissors beats Paper.");
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  if (computerScore > humanScore) {
    console.log("Computer Wins!");
  } else if (humanScore > computerScore) {
    console.log("You Win!");
  } else {
    console.log("It's a tie");
  }
}

playGame();
