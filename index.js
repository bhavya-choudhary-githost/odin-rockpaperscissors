function getComputerChoice(){
    const choice = Math.floor(Math.random()*99)
    
    switch(true){
        case (choice < 33):
            return "rock";
            break;
        case(choice < 66):
            return "paper";
            break;
        default:
            return "scissor";
        }
    }

function getHumanChoice(){
    const choice = window.prompt("rock,paper or scissors?").trim().toLowerCase()

    switch(choice){
        case "rock":
            return "rock";

        case "paper":
            return "paper";

        case "scissor":
            return "scissor";
            
        case "scissors":
            return "scissor";
        
        default:
            window.alert("Invalid Input");
            return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper")
                
        {humanScore++;}

    else if (humanChoice == computerChoice){}
            
    else {
        computerScore++;
            }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice(), computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
}

let humanScore = 0, computerScore = 0;
playGame()

console.log(`Your Score: ${humanScore}\nComputerScore: ${computerScore}`)