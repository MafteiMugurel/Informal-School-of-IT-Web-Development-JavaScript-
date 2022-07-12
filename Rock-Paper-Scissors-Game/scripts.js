const options = ["rock", "paper", "scissors"];
var userOption;
var rounds = 0;
var compluterScore = 0;
var userScore = 0;
function play() {
  let computerOption = options[Math.floor(Math.random(options) * 3)];
  rounds = rounds + 1;

  var computerOptionElement = document.getElementById("computerChoose");
  computerOptionElement.innerText = computerOption;
  if (computerOption === userOption) {
    var roundResult = document.getElementById("winner");
    roundResult.innerText = "Tie";
  } else {
    if (computerOption === "rock") {
      if (userOption === "scissors") {
        compluterScore = compluterScore + 1;
        var roundResult = document.getElementById("winner");
        roundResult.innerText = "Computer Wins";
      } else if (userOption === "paper") {
        userScore = userScore + 1;
        var roundResult = document.getElementById("winner");
        roundResult.innerText = "User Wins";
      }
    } else if (computerOption === "paper") {
      if (userOption === "scissors") {
        userScore = userScore + 1;
        var roundResult = document.getElementById("winner");
        roundResult.innerText = "User Wins";
      } else if (userOption === "rock") {
        compluterScore = compluterScore + 1;
        var roundResult = document.getElementById("winner");
        roundResult.innerText = "Computer Wins";
      }
    } else if (computerOption === "scissors") {
      if (userOption === "rock") {
        userScore = userScore + 1;
        var roundResult = document.getElementById("winner");
        roundResult.innerText = "User Wins";
      } else if (userOption === "paper") {
        compluterScore = compluterScore + 1;
        var roundResult = document.getElementById("winner");
        roundResult.innerText = "Computer Wins";
      }
    }
  }
  var userWins = document.getElementById("userScore");
  userWins.innerText = userScore;
  var computerWins = document.getElementById("computerScore");
  computerWins.innerText = compluterScore;
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

  var userSelectedElement = document.getElementById("userChoose");
  userSelectedElement.innerText = userOption;
}
