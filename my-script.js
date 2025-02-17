function getComputerChoice() {
    
    let comChoice = Math.floor(Math.random() * 3) + 1;

    switch(comChoice) {
        case 1: return "rock";
        case 2: return "paper";
        default: return "scissors";
    }
}

