let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const resultPara = document.createElement("p");

resultsDiv.appendChild(resultPara);

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultPara.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultPara.textContent = "You win!";
    humanScore++;
  } else {
    resultPara.textContent = "You lose!";
    computerScore++;
  }
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
