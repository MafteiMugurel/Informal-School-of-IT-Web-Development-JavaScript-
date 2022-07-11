const options = ["rock", "paper", "scissors"];

function play() {
  let computerOption = options[Math.floor(Math.random(options) * 3)];
  let userOption = options[Math.floor(Math.random(options) * 3)];

  console.log("Computer choice:" + computerOption);
  console.log("User choice:" + userOption);

  if (computerOption === userOption) {
    console.log("Tie");
  } else {
    if (computerOption === "rock") {
      if (userOption === "scissors") {
        console.log("Computer Wins");
      } else if (userOption === "paper") {
        console.log("User Wins");
      }
    } else if (computerOption === "paper") {
      if (userOption === "scissors") {
        console.log("User Wins");
      } else if (userOption === "rock") {
        console.log("Computer Wins");
      }
    } else if (computerOption === "scissors") {
      if (userOption === "rock") {
        console.log("User Wins");
      } else if (userOption === "paper") {
        console.log("Computer Wins");
      }
    }
  }
}

play();
