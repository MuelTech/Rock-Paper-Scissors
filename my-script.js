function getComputerChoice() {
    
    let comChoice = Math.floor(Math.random() * 3) + 1;

    switch(comChoice) {
        case 1: return "rock";
        case 2: return "paper";
        default: return "scissors";
    }
}

function getHumanChoice() {
    
    let choiceCheck = true;
    let choice;

    while (choiceCheck) {
    
        choice = prompt("Choose your pick (Rock, Paper, Scissors)").toLowerCase();

        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            choiceCheck = false;
            return choice;
        } else {
            alert('Please choose valid choices try again.')
            choiceCheck = true;
        }
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