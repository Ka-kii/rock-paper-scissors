let humanScore = 0;
let computerScore = 0;

function getComputerchoice() {
  let computer = Math.random();

  if (computer <= 0.3) {
    console.log("the Computer chose Rock");
    return (computer = "rock");
  } else if (computer <= 0.6) {
    console.log("the Computer chose Paper");
    return (computer = "paper");
  } else {
    console.log("the Computer chose Scissors");
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
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    return computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors");
    return humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock");
    return humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper");
    return computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors");
    return computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper");
    return humanScore++;
  } else {
    console.log("It's a tie!");
  }
}
// const humanSelection = getHumanchoice();
// const computerSelection = getComputerchoice();
// playRound(humanSelection, computerSelection)

function playGame() {
  for (let i = 0; i <= 4; i++) {
    playRound(getHumanchoice(), getComputerchoice());
  }

  if (humanScore > computerScore) {
    console.log(
      `You won the game with a score of ${humanScore}! The computer won ${computerScore} rounds`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `The computer won the game with a score of ${computerScore}! You won ${humanScore} rounds`
    );
  } else {
    console.log("The game came out as a tie!");
  }
}

playGame();
