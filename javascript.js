let humanScore = 0;
let computerScore = 0;

//add variables for each choice and the result
const btnRock = document.querySelector("button.buttonRock");
const btnPaper = document.querySelector("button.buttonPaper");
const btnScissors = document.querySelector("button.buttonScissors");
const roundResult = document.querySelector("div.roundResult");

//play a round when a button is clicked
btnRock.addEventListener("click", () => playRound("rock", getComputerchoice()));
btnPaper.addEventListener("click", () =>
  playRound("paper", getComputerchoice())
);
btnScissors.addEventListener("click", () =>
  playRound("scissors", getComputerchoice())
);

function getComputerchoice() {
  let computer = Math.random();
  let computerText = document.createElement("p");
  roundResult.appendChild(computerText);

  if (computer <= 0.3) {
    computerText.textContent = "the Computer chose Rock";
    return (computer = "rock");
  } else if (computer <= 0.6) {
    computerText.textContent = "the Computer chose Paper";
    return (computer = "paper");
  } else {
    computerText.textContent = "the Computer chose Scissors";
    return (computer = "scissors");
  }
}

function getHumanchoice() {
  let human = prompt("What do you throw?");

  if (human.slice(0).toLowerCase() == "rock") {
    console.log("you chose Rock");
    return (human = "rock");
  } else if (human.slice(0).toLowerCase() == "paper") {
    console.log("you chose Paper");
    return (human = "paper");
  } else if (human.slice(0).toLowerCase() == "scissors") {
    console.log("you chose Scissors");
    return (human = "scissors");
  } else {
    console.log("not a valid input");
    getHumanchoice();
  }
}

function playRound(humanChoice, computerChoice) {
  let resultText = document.createElement("p");
  roundResult.appendChild(resultText);

  if (humanChoice == "rock" && computerChoice == "paper") {
    resultText.textContent = "You lose! Paper beats Rock";
    return computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    resultText.textContent = "You win! Rock beats Scissors";
    return humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    resultText.textContent = "You win! Paper beats Rock";
    return humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    resultText.textContent = "You lose! Scissors beats Paper";
    return computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    resultText.textContent = "You lose! Rock beats Scissors";
    return computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    resultText.textContent = "You win! Scissors beats Paper";
    return humanScore++;
  } else {
    resultText.textContent = "It's a tie!";
  }
}

// function playGame() {
//   for (let i = 0; i <= 4; i++) {
//     playRound(getHumanchoice(), getComputerchoice());
//   }

//   if (humanScore > computerScore) {
//     console.log(
//       `You won the game with a score of ${humanScore}! The computer won ${computerScore} rounds`
//     );
//   } else if (computerScore > humanScore) {
//     console.log(
//       `The computer won the game with a score of ${computerScore}! You won ${humanScore} rounds`
//     );
//   } else {
//     console.log("The game came out as a tie!");
//   }
// }
