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
    
        choice = prompt("Choose your pick (Rock, Paper, Scissors)").toLocaleLowerCase();

        if (choice == 'rock' || choice == 'paper' || choice === 'scissors') {
            choiceCheck = false;
            return choice;
        } else {
            alert('Please choose valid choices try again.')
            choiceCheck = true;
        }
    } 
}

