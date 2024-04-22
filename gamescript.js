//get computer choice
//get player choice
//determine winner round
//keep track of score

let computerScore = 0;
let playerScore = 0;
let isActive = true;
let gameRound = 0;


function getComputerChoice() {
    const randnum = Math.floor(Math.random() * 3);

    switch (randnum) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getPlayerChoice() {
    const choice = prompt("Enter your choice: ");

    return choice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "DRAW!";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Win! Paper beats Rock";
        playerScore += 1;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You Win! Rock beats Scissors";
        playerScore += 1;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You Lose! Paper beats Rock";
        computerScore += 1;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You Win! Scissors beats Paper";
        playerScore += 1;
    } else if(playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        return "You Lose! Rock beats Scissors!";
        computerScore += 1;
    }  
}



const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

console.log(playerSelection);
console.log(computerSelection);