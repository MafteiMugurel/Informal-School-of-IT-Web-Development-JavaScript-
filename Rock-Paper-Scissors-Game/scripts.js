const options = ["rock", "paper", "scissors"];
var userOption;
var rounds = 0;
var compluterScore = 0;
var userScore = 0;
function play() {
  let computerOption = options[Math.floor(Math.random(options) * 3)];
 rounds = rounds +1;
 console.log(rounds);

  console.log("Computer choice:" + computerOption);
  console.log("User choice:" + userOption);

  if (computerOption === userOption) {
    console.log("Tie");
  } else {
    if (computerOption === "rock") {
      if (userOption === "scissors") {
        compluterScore = compluterScore +1;
        console.log("Computer Wins");
      } else if (userOption === "paper") {
        userScore = userScore +1;
        console.log("User Wins");
      }
    } else if (computerOption === "paper") {
      if (userOption === "scissors") {
        userScore = userScore +1;
        console.log("User Wins");
      } else if (userOption === "rock") {
        compluterScore = compluterScore +1;
        console.log("Computer Wins");
      }
    } else if (computerOption === "scissors") {
      if (userOption === "rock") {
        userScore = userScore +1;
        console.log("User Wins");
      } else if (userOption === "paper") {
        compluterScore = compluterScore +1;
        console.log("Computer Wins");
      }
    }
  }
  console.log("User Wins" , userScore);
  console.log("Computer Wins" ,compluterScore);
  
}

function show(elementID) {
  var ele = document.getElementById(elementID);
  if (!ele) {
    alert("No Such Page Found.");
    return;
  }
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  ele.style.display = "block";
}

function select(option) {
  userOption = option;
  console.log(userOption);
}
