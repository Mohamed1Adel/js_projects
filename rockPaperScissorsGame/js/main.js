const buttons = document.querySelectorAll("button");
// const button = document.querySelector("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.id)
    // console.log(
    //   "user choice!" , button.id,
    //   "computer choice! ",
    //   computerPlay()
    // );
    const result = playRound(button.id, computerPlay());
    console.log(result);
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  // console.log(Math.random());
  // console.log(randomChoice)
  return choices[randomChoice];
}

// button.addEventListener("click",()=>{
//     computerPlay();
// })

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
