let rpsArr = ["rock", "paper", "scissors"];
// Array holding the possible selections

let randomNum = (max) => {
  return Math.floor(Math.random() * max);
}
// Math.random generates a number between 0 and less than 1 (O is inclusive while 1 is exclusive). Then we multiply that by our max number, which we'll always set to 3. We have all that inside of our Math.floor function which will return the largest integer less than or equal to a given number. 

// For example, Math.random could generate something like .05741. Then it gets immediately multiplied by 3 which would give us 0.17223. This number is then passed into the Math.floor function which rounds it down to the nearest integer, which is 0.


let computerPlay = () => {
  return rpsArr[randomNum(3)];
  // update dom with computer selection
}
// This is the function that will be used to generate the computers selection of either rock, paper, or scissors. 

// In this function, we are returning an element from our array named rpsArr. To do this we use bracket notation. However, instead of us hard coding a number in the brackets, we pass the function randomNum(3)

// Notice, we're using bracket notation to access an element in our array named rpsArray. We use the randomNum function with 3 passed as the argument. This will generate 0, 1, or 2. Whichever number is generated by randomNum(3) will be the element in rpsArr that our function returns.


// function playerChoice() {
//   let input = prompt("Make your selection: Rock, Paper, or Scissors");
//   input = input.toLowerCase();
//   return input;
// }
function playerChoice(input) {
  return input;
}
// console.log(playerChoice("paper"))
// This Function takes the players input via a prompt and returns it to the console. This is used as the pSelection.


function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") || 
    (choiceP === "paper" && choiceC === "rock") || 
    (choiceP === "scissors" && choiceC === "paper")
    ) {
    return "Player";
  } else {
    return "Computer";
  }
}
// Function that returns who won based on some conditionals. Later we'll use this to push the winner into an array which we will count to log the score of the whole game (5 rounds total).

let winners = [];

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;

}
// Function prints the results of the game. *MORE DETAIL*

function checkWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  return Math.max(playerWins, computerWins)
}
// Returns the winner of the game. Looks at the Winners array and counts who had the most wins

function tallyWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  document.querySelector('.playerScore').textContent = `Your Score: ${playerWins}`;
  document.querySelector('.computerScore').textContent = `Computer Score: ${computerWins}`;

}
// Keeps and updates the score in the gui

function finalWinner(playerWins, computerWins) {
  if (playerWins === computerWins) {
    return "The game ended in a tie!"
  } else if (playerWins < computerWins) {
    return "The Computer beat you! Try again next time."
  } else if (playerWins > computerWins) {
    return "Congratulations, you beat the Computer!"
  }
}
// Function that compares playerWins and computerWins



let gameRound = (pSelection) => {
  // Is parameter correct? Should be the players selction
  let wins = checkWins();
  if (wins >= 5) {
    return
  }

  const cSelection = computerPlay();
  const winner = checkWinner(pSelection, cSelection);
  const winDeclaration = playRound(pSelection, cSelection)
  winners.push(winner);
  tallyWins();
  displayRound(pSelection, cSelection, winner);
  wins = checkWins();
  if (wins == 5) {
    // display end results
    // change the play again button to visible
    // change the text to display winner
    displayEnd();
  }
}
// gameRound function acts as a wrapper of all the other functions.

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;
  if (playerWins == 5) {
    document.querySelector('.winner').textContent = "Congrats! You won 5 games!"
  } else {
    document.querySelector('.winner').textContent = "Sorry, you lost. The computer won 5 games."
  }
  document.querySelector('.reset').style.display = 'flex';
}

function displayRound(pSelection, cSelection, winner) {
  document.querySelector('.playerChoice').textContent = `You Chose: ${pSelection.charAt(0).toUpperCase() + pSelection.slice(1)}`
  document.querySelector('.computerChoice').textContent = `Computer Chose: ${cSelection.charAt(0).toUpperCase() + cSelection.slice(1)}`
  document.querySelector('.winner').textContent = `Round Winner: ${winner}`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == 'Player') {
    document.querySelector('.winner').textContent = 'You won the round!';
  } else if ( winner == 'Computer') {
    document.querySelector('.winner').textContent = 'The computer won the round.';
  } else {
    document.querySelector('.winner').textContent = 'The round was a tie!'
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie!"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors!"
  } else if (playerSelection === "rock" && computerSelection === "paper"){
    return "You Lose! Paper beats Rock!"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock!"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper!"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper!"
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors!"
  }
}
// This function plays a round of the game and returns who won and how.

function game () {
// Play the game until 5 wins
  let imgs = document.querySelectorAll('img')
  imgs.forEach((img) => 
  img.addEventListener(('click'), () => {
    if(img.id) {
      gameRound(img.id);
    }
  }))
}
// Main game function that uses a For loop and loops through 5 rounds.

function resetGame() {
  winners = [];
  document.querySelector('.playerScore').textContent = 'Player Score: 0';
  document.querySelector('.computerScore').textContent = 'Computer Score: 0';

  document.querySelector('.winner').textContent = '';
  document.querySelector('.playerChoice').textContent = '';
  document.querySelector('.computerChoice').textContent = '';
  document.querySelector('.reset').style.display = 'none';
}

game();