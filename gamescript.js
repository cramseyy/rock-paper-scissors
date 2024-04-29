let userInput;
let computerChoice = getComputerChoice();

const rbtn = document.querySelector("#rock-btn");
rbtn.addEventListener("click", () => {
    userInput1 = "rock";
    comp = computerChoice;
    alert("You selected: " + rbtn.textContent);
    alert("Computer selected: " + comp);
    playRound(userInput1, getComputerChoice());

})

const pbtn = document.querySelector("#paper-btn");
pbtn.addEventListener("click", () => {
    userInput2 = "paper";
    alert(pbtn.textContent);
    playRound(userInput2, getComputerChoice());
})

const sbtn = document.querySelector("#scissor-btn");
pbtn.addEventListener("click", () => {
    userInput3 = "scissors";
    alert("You selected: " + sbtn.textContent);
    playRound(userInput3, getComputerChoice());
})

function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];

    let computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        alert("DRAW");
    }

    if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            alert("You win! Paper beats rock");
        } else if(computerSelection === "scissors"){
            alert("You lose! Scissors beats paper!");
        }
    }

    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            alert("You lose! Paper beats rock");
        } else if(computerSelection === "scissors"){
            alert("You Win! Rock beats scissors!");
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            alert("You lose! Rock beats scissors");
        } else if(computerSelection === "paper"){
            alert("You win! Scissors beats paper!");
        }
    }
}
