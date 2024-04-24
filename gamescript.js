//get computer choice
//get player choice
//determine winner round
//keep track of score

let computerScore = 0;
let playerScore = 0;
let isActive = true;
let gameRound = 0;
let roundMessage = "";


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

    if(playerSelection === computerSelection) {
        roundMessage = "DRAW!";
    }

    if(playerSelection === "ROCK") {
        if(computerSelection === "PAPER") {
            roundMessage = "You Lose! Paper beats Rock";
            computerScore += 1;
        }
        else if(computerSelection === "SCISSORS"){
            roundMessage = "You Win! Rock beats Scissors";
            playerScore += 1;
        }
    }
    else if(playerSelection === "PAPER") {
        if(computerSelection === "ROCK") {
            roundMessage = "You Win! Paper beats Rock";
            playerScore += 1;
        }
        else if(computerSelection === "SCISSORS") {
            roundMessage = "You Lose! Scissors beats Paper";
            computerScore += 1;
        }
    }
    else if(playerSelection === "SCISSORS") {
        if(computerSelection === "PAPER") {
            roundMessage = "You Win! Scissors beats Paper";
            playerScore += 1;
        }
        else if(computerSelection === "ROCK") {
            roundMessage = "You Lose! Rock beats Scissors";
            computerScore += 1;
        }
    }
   
}


function declareWinner(playerScore, computerScore) {
    if(playerScore === computerScore) {
        return "DRAW"
    } else if (playerScore > computerScore) {
        return "PLAYER WINS"
    } else if (playerScore < computerScore) {
        return "COMPUTER WINS"
    }
}

function playGame() {

    while (isActive ) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        gameRound++;
        if (playerScore == 3 || computerScore == 3) {
            isActive = false;
        }
        console.log("Your selection: " + playerSelection);
        console.log("Computers selection " + computerSelection);
        console.log("Game round " +gameRound);
        console.log("Player score: " +playerScore);
        console.log("Computer score: " +computerScore);
        console.log(roundMessage);
    }
        console.log(declareWinner(playerScore, computerScore));

}

playGame();