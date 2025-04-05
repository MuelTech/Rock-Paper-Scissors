let humanScore = 0;
let computerScore = 0;
let roundGame = 0;

const startButton = document.getElementById("rps-btn");
const para = document.querySelector(".game-message");
const humanChoice = document.querySelector('.human-choice');
const computerChoice = document.querySelector('.computer-choice');
const roundText = document.querySelector('.round-text');
const humanScoreText = document.querySelector('.human-score');
const computerScoreText = document.querySelector('.computer-score')
const showWinner = document.querySelector('.popup-modal');
const modalMessage = document.querySelector('.popup-message');
const resetBtn = document.querySelector(".popup-btn");
const disableWeaponBtn = document.querySelectorAll(".disabled-btn")

startButton.addEventListener('click', (event) => {
    playGame(event.target.value);
});

resetBtn.addEventListener('click', () => gameReset());

function showRoundChoices(humanPick, computerPick) {
    humanChoice.textContent = convertIcon(humanPick);
    computerChoice.textContent = convertIcon(computerPick);
}

function convertIcon (convertTextToIcon) {
    if (convertTextToIcon == 'rock') return "👊";
    else if (convertTextToIcon == 'paper') return "🖐️";
    else return "✌️";
}

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
        para.textContent = "ITS A TIE!";
        roundText.textContent = `Round ${roundGame++}`;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper')
    {
        humanScore++;
        para.textContent = (`You Win! ${humanChoice} beats ${computerChoice}\n`);
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
        roundText.textContent = `Round ${roundGame++}`;
    } else {
        computerScore++;
        para.textContent = (`You Lose! ${computerChoice} beats ${humanChoice}\n`);
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
        roundText.textContent = `Round ${roundGame++}`;
    }
}

function showTheWinner() {
    if (humanScore === 5) {
        modalMessage.textContent = "YOU WON!";
        showWinner.classList.remove('show')
        disableWeaponBtn.forEach(elem => elem.disabled = true);
    } else if (computerScore === 5) {
        modalMessage.textContent = "CPU WON!";
        showWinner.classList.remove('show')
        disableWeaponBtn.forEach(elem => elem.disabled = true);
    }
}

function gameReset() {
        roundGame = 0;
        humanScore = 0;
        computerScore = 0;
        showWinner.classList.add('show')
        humanChoice.textContent = "?";
        computerChoice.textContent = "?";
        para.innerHTML = "Ready to Play? <br> Make your Move!";
        roundText.textContent = `Round ${roundGame}`;
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
        disableWeaponBtn.forEach(elem => elem.disabled = false);
}

function playGame(humanSelect) {
        const humanSelection = getHumanChoice(humanSelect);
        const computerSelection = getComputerChoice();
        showRoundChoices(humanSelection, computerSelection);
        playRound(humanSelection, computerSelection);
        showTheWinner();
}