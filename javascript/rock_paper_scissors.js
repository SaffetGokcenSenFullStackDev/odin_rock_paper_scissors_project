function computerPlay() {
    let randInt = Math.floor(Math.random() * 3);

    if (randInt === 0) {
        return "rock";
    }
    else if (randInt === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "tied"
    }
    else {
        if ((playerSelection === "rock") && (computerSelection === "paper")) {
            return "computer";
        }
        else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
            return "you";
        }
        else if ((playerSelection === "paper") && (computerSelection === "rock")) {
            return "you";
        }
        else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
            return "computer";
        }
        else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
            return "computer";
        }
        else {
            return "you";
        }
    }
}

function playRoundUserInterface(result) {
    if (result === "tied") {
        computerScore += 0;
        playerScore += 0;
    }
    else if (result === "you") {
        playerScore += 1;
    }
    else {
        computerScore += 1;
    }
    
    yourShake.textContent = playerSelection.toUpperCase();
    computerShake.textContent = computerSelection.toUpperCase();
    yourScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;

    if (computerScore == 5) {
        winnerAnnouncer.textContent = "THE WINNER IS THE COMPUTER BY " + computerScore + " to " + playerScore;
        computerScore = 0;
        playerScore = 0;
    }
    else if (playerScore == 5) {
        winnerAnnouncer.textContent = "THE WINNER IS YOU BY " + playerScore + " to " + computerScore;
        computerScore = 0;
        playerScore = 0;
    }
};

const yourShake = document.querySelector(".player-result").lastChild;
const computerShake = document.querySelector(".computer-result").lastChild;
const yourScoreBoard = document.querySelector(".player-score").lastChild;
const computerScoreBoard = document.querySelector(".computer-score").lastChild;
const winnerAnnouncer = document.querySelector(".announcement-text");

let computerScore = 0;
let playerScore = 0;
let computerSelection, playerSelection;

const buttonRock = document.querySelector("button.rock");
buttonRock.addEventListener("click", () => {
    winnerAnnouncer.textContent = "";
    computerSelection = computerPlay();
    playerSelection = "rock";

    let result = playRound("rock", computerSelection);

    playRoundUserInterface(result);
});

const buttonPaper = document.querySelector("button.paper");
buttonPaper.addEventListener("click", () => {
    winnerAnnouncer.textContent = "";
    computerSelection = computerPlay();
    playerSelection = "paper";
    
    let result = playRound("paper", computerSelection);

    playRoundUserInterface(result);
});

const buttonScissors = document.querySelector("button.scissors");
buttonScissors.addEventListener("click", () => {
    winnerAnnouncer.textContent = "";
    computerSelection = computerPlay();
    playerSelection = "scissors";
    
    let result = playRound("scissors", computerSelection);

    playRoundUserInterface(result);
});