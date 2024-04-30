let userInput;
let playScoreCount = 0;
let computerScoreCount = 0;

let playerScore = document.querySelector(".playerScore");
let playerScoreContent = document.createElement("h3");
playerScoreContent.textContent = "PlayerScore: ";
playerScoreContent.style.color = "blue";
playerScoreContent.style.textAlign = "center";
playerScore.appendChild(playerScoreContent);

let computerScore = document.querySelector(".computerScore");
let computerScoreContent = document.createElement("h3");
computerScoreContent.textContent = "Computer score: ";
computerScoreContent.style.color = "red";
computerScoreContent.style.textAlign = "center";
computerScore.appendChild(computerScoreContent);

let message = document.querySelector(".gameMessage");
let messageContent = document.createElement("p");
messageContent.textContent = "Can you win?";
message.style.textAlign = "center";
messageContent.style.fontSize = "30px";
message.appendChild(messageContent);

let cChoice = document.querySelector(".computerChoice");
let cChoiceContent = document.createElement("h4");
cChoice.appendChild(cChoiceContent);

let pChoice = document.querySelector(".playerChoice");
let pChoiceContent = document.createElement("h4");
pChoice.appendChild(pChoiceContent);

const rbtn = document.querySelector("#rock-btn");
rbtn.addEventListener("click", () => {
    userInput = "rock";
    let computerChoice = getComputerChoice();
    playRound(userInput, computerChoice);
    
    let winnerString = playRound(userInput, computerChoice);
    if(winnerString.includes("You win!")){
        playScoreCount++;
        playerScoreContent.textContent = "Player Score: " + playScoreCount;
    } else {
        computerScoreCount++;
        computerScoreContent.textContent = "Computer Score: " + computerScoreCount;
    }

    messageContent.textContent = playRound(userInput, computerChoice);
    cChoiceContent.textContent = "Computer choice: " + computerChoice;
    pChoiceContent.textContent = "Player choice: " + userInput;

})

const pbtn = document.querySelector("#paper-btn");
pbtn.addEventListener("click", () => {
    userInput = "paper";
    let computerChoice = getComputerChoice();
    playRound(userInput, computerChoice);

    let winnerString = playRound(userInput, computerChoice);
    if(winnerString.includes("You win!")){
        playScoreCount++;
        playerScoreContent.textContent = "Player Score: " + playScoreCount;
    } else {
        computerScoreCount++;
        computerScoreContent.textContent = "Computer Score: " + computerScoreCount;
    }

    messageContent.textContent = playRound(userInput, computerChoice);
    cChoiceContent.textContent = "Computer choice: " + computerChoice;
    pChoiceContent.textContent = "Player choice: " + userInput;
})

const sbtn = document.querySelector("#scissor-btn");
sbtn.addEventListener("click", () => {
    userInput = "scissors";
    let computerChoice = getComputerChoice();
    playRound(userInput, computerChoice);

    let winnerString = playRound(userInput, computerChoice);
    if(winnerString.includes("You win!")){
        playScoreCount++;
        playerScoreContent.textContent = "Player Score: " + playScoreCount;
    } else {
        computerScoreCount++;
        computerScoreContent.textContent = "Computer Score: " + computerScoreCount;
    }

    messageContent.textContent = playRound(userInput, computerChoice);
    cChoiceContent.textContent = "Computer choice: " + computerChoice;
    pChoiceContent.textContent = "Player choice: " + userInput;
})

function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];

    let computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper!";
    } else {
        return "DRAW";
    }
}