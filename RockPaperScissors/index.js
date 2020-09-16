
const getUserChoice = () => { //userInput here = undefined
  userInput = prompt("Rock, Paper, or Scissors: ").toLowerCase(); //userInput is assigned value here.
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    console.log("Please input one of the following: rock, paper, or scissors. ")
    return getUserChoice(); //calls the function again (try again) 
  }
};

const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissors";
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie";
  }

  if (userChoice === "rock"){
    if (computerChoice === "paper"){
      return "computer won!";
    } 
    return "you won!";
  }

  if (userChoice === "paper"){
    if (computerChoice === "scissors"){
      return "computer won!";
    }
    return "you won!";
  }

  if (userChoice === "scissors"){
    if (computerChoice === "rock"){
      return "computer won!";
    }
    return "you won!";
  }
}

const playGame = ()=> {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  if(!computerChoice) {
    return;
  }
  console.log("User Choice: " + userChoice);
  console.log("Computer Choice: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  return
}

playGame();
