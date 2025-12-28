let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");

const resultPara = document.createElement("p");
const scorePara = document.createElement("p");
const winnerPara = document.createElement("p");

resultsDiv.append(resultPara, scorePara, winnerPara);

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function updateScore() {
  scorePara.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultPara.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultPara.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  updateScore();

  if (humanScore === 5 || computerScore === 5) {
    winnerPara.textContent =
      humanScore === 5 ? "🎉 You Win the Game!" : "💻 Computer Wins the Game!";

    humanScore = 0;
    computerScore = 0;
    updateScore();
  }
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
