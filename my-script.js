
let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    
    let comChoice = Math.floor(Math.random() * 3) + 1;

    switch(comChoice) {
        case 1: return "rock";
        case 2: return "paper";
        default: return "scissors";
    }
}

function getHumanChoice(choice) {
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } 
} 

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        para.textContent = ("ITS A TIE!\n");
        para.textContent += (`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper')
    {
        humanScore++;
        para.textContent = (`You Win! ${humanChoice} beats ${computerChoice}\n`);
        para.textContent += (`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
    } else {
        computerScore++;
        para.textContent = (`You Lose! ${computerChoice} beats ${humanChoice}\n`);
        para.textContent += (`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
    }
}

// function playGame() {

//     for (let i = 1; i <= 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection, humanScore, computerScore);
//     } 
//     if (humanScore === computerScore) {
//         console.log(`It's a draw! No winner in this match.`)
//     }else if (humanScore > computerScore) {
//         console.log(`You beat Computer! Congratulations!`);
//     } else {
//         console.log(`GAME OVER! You lost by a Computer!`);
//     }
// }

    const buttons = document.getElementById("buttons");
    const para = document.querySelector(".announce");
    para.style.whiteSpace = "pre";

    buttons.addEventListener("click", (choices) => {
        if (choices.target.matches(".btn")) {
            const humanSelection = getHumanChoice(choices.target.textContent);
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
    });

// playGame();