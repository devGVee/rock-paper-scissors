let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose ${humanChoice}`);
  console.log(`Computer chose ${computerChoice}`);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
