let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector('#results');

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 99);
    if (randomNum < 33) return "rock";
    if (randomNum < 66) return "paper";
    return "scissors";
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = `Tie! Both picked ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult = `Win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundResult = `Loss! ${computerChoice} beats ${humanChoice}.`;
    }

    resultsDiv.innerHTML = `
        <p>${roundResult}</p>
        <p>Score: ${humanScore} - ${computerScore}</p>
    `;
}

document.querySelector('#rock').addEventListener('click', () => playRound('rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));
