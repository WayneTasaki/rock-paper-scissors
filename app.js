let rpsArr = ["rock", "paper", "scissors"];
// Array holding the possible selections

let randomNum = (max) => {
  return Math.floor(Math.random() * max);
}
// Math.random generates a number between 0 and less than 1 (O is inclusive while 1 is exclusive). Then we multiply that by our max number, which we'll always set to 3. We have all that inside of our Math.floor function which will return the largest integer less than or equal to a given number. 

// For example, Math.random could generate something like .05741. Then it gets immediately multiplied by 3 which would give us 0.17223. This number is then passed into the Math.floor function which rounds it down to the nearest integer, which is 0.


let computerPlay = () => {
  return rpsArr[randomNum(3)];
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

const winners = [];

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:")
  console.log("Player Wins:", playerWins)
  console.log("Computer Wins:", computerWins)
  console.log("Ties:", ties)
  console.log(finalWinner(playerWins, computerWins))
}
// Function prints the results of the game. *MORE DETAIL*

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


function logRound(pSelection, cSelection, winDeclaration, round) {
  console.log("Round:", round)
  console.log("Player Chose:", pSelection)
  console.log("Computer Chose:", cSelection)
  console.log(winDeclaration)
  console.log("-------------------------")
}

let gameRound = (round) => {
  const pSelection = playerChoice();
  const cSelection = computerPlay();
  const winner = checkWinner(pSelection, cSelection);
  const winDeclaration = playRound(pSelection, cSelection)
  winners.push(winner);
  logRound(pSelection, cSelection, winDeclaration, round)
}
// gameRound function acts as a wrapper of all the other functions.

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
  for (let i = 1; i <= 5; i++) {
    gameRound(i);
  }
  logWins();
}

// Main game function that uses a For loop and loops through 5 rounds.

// game()
// ----------------------------

// Can pSelection and cSelection be global scoped and then used in both 


// Need to make "${variable won the round" it's own function outside of 


// *-------------------------*
// *---------- UI -----------*
// *-------------------------*

// need to create variable for each possible player selection. For example btnRock = the id of the div containing that selection. Then you add event listener to that variable such as btnRock 'click'

// const btn = document.querySelectorAll('.selection')
// btn.forEach(btn => btn.addEventListener('click', gameRound));

const btnRock = document.getElementById('btnRock')
const btnPaper = document.getElementById('btnPaper')
const btnScissors = document.getElementById('btnScissors')

btnPaper.addEventListener('click', () => playerChoice('paper'));





// playerchoice a function with parameter of rock paper or scissors. Then just return that string.
// ORR can I somehow say IF btnPaper is clicked,  