const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput=== "rock") {
      return userInput
    } else if (userInput === "paper") {
      return userInput
    } else if (userInput === "scissors") {
      return userInput
    } else {
      console.log("Invalid choice.")
    }
  }
  
  const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 2)
    if (choice === 0) {
      return "rock"
    } else if (choice === 1 ) {
      return "paper"
    } else if (choice === 2) {
      return "scissors"
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return "It's a draw!"
    }
  
    if (userChoice === "rock") {
      if(computerChoice === "paper"){
        return "Computer won!"
      } else {
        return "Player won!"
      }
      if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          return "Computer won!"
        } else {
          return "Player won!"
        }
      if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          return "Computer won!"
        } else {
          return "Player won!"
        }
      }
      }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice();
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
  }
  
  // console.log(getUserChoice("rock"));
  // console.log(getComputerChoice());
  console.log(determineWinner("rock","paper"));