function getComputerChoice() {
    
    let comChoice = Math.floor(Math.random() * 3) + 1;

    switch(comChoice) {
        case 1: return "rock";
        case 2: return "paper";
        default: return "scissors";
    }
}

function getHumanChoice() {
    
    let choice = prompt("Choose your pick (Rock, Paper, Scissors)").toLowerCase();

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        alert('Please choose valid choices try again.')
        return getHumanChoice();
    }
} 

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("ITS A TIE!");
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper')
    {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    } else {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    }
}

function playGame() {

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, humanScore, computerScore);
    } 
    if (humanScore === computerScore) {
        console.log(`It's a draw! No winner in this match.`)
    }else if (humanScore > computerScore) {
        console.log(`You beat Computer! Congratulations!`);
    } else {
        console.log(`GAME OVER! You lost by a Computer!`);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();