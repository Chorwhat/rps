function computerPlay(){
    let d3Roll = Math.floor(Math.random() * 3) + 1;
    let computersChoice;

    if(d3Roll === 1){
        computersChoice = "Rock";
    } else if(d3Roll === 2){
        computersChoice = "Paper";
    } else {
        computersChoice = "Scissors";
    }
    return computersChoice;
}


function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        if(playerChoice === "rock"){
            if(computerSelection === "Scissors"){
                return "You Win! Rock beats Scissors!";
            } else if (computerSelection === "Rock"){
                return "Tie Game! You both chose Rock!";
            } else {
                return "You Lose! Rock loses to Paper!"
            }
        }
        else if(playerChoice === "paper"){
            if(computerSelection === "Rock"){
                return "You Win! Paper beats Rock!";
            } else if (computerSelection === "Paper"){
                return "Tie Game! You both chose Paper!";
            } else {
                return "You Lose! Paper loses to Scissors!"
            }
        } else {
            if(computerSelection === "Paper"){
                return "You Win! Scissors beats Paper!";
            } else if (computerSelection === "Scissors"){
                return "Tie Game! You both chose Scissors!";
            } else {
                return "You Lose! Scissors loses to Rock!"
            }
        }
    }else {
        console.log("invalid player selection");
    }
}