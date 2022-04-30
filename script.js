let playerSelection;
let win = "win";
let tie = "tie";
let lose = "lose";
let winCount = 0;
let loseCount = 0;
let tieCount = 0;
let playerPaperCount = 0;
let playerRockCount = 0;
let playerScissorsCount = 0;
let enemyPaperCount = 0;
let enemyRockCount = 0;
let enemyScissorsCount = 0;

function setplayerSelection(){
    playerSelection = prompt();
    //delete this line below after, it is for testing
    console.log(playerSelection);
}

function computerPlay(){
    let d3Roll = Math.floor(Math.random() * 3) + 1;
    let computersChoice;

    if(d3Roll === 1){
        computersChoice = "Rock";
        enemyRockCount++;
    } else if(d3Roll === 2){
        computersChoice = "Paper";
        enemyPaperCount++;
    } else {
        computersChoice = "Scissors";
        enemyScissorsCount++;
    }
    return computersChoice;
}


function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    
    
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        if(playerChoice === "rock"){
            playerRockCount++;
            if(computerSelection === "Scissors"){
                console.log( "You Win! Rock beats Scissors!");
                winCount++;
                console.log("Wins: " + winCount);
                return win;
            } else if (computerSelection === "Rock"){
                console.log( "Tie Game! You both chose Rock!");
                tieCount++;
                console.log("Ties: " + tieCount);
                return tie;
            } else {
                console.log( "You Lose! Rock loses to Paper!");
                loseCount++;
                console.log("Loses: " + loseCount);
                return lose;
            }
        }
        else if(playerChoice === "paper"){
            playerPaperCount++;
            if(computerSelection === "Rock"){
                console.log( "You Win! Paper beats Rock!");
                winCount++;
                console.log("Wins: " + winCount);
                return win;
            } else if (computerSelection === "Paper"){
                console.log( "Tie Game! You both chose Paper!");
                tieCount++;
                console.log("Ties: " + tieCount);
                return tie;
            } else {
                console.log( "You Lose! Paper loses to Scissors!");
                loseCount++;
                console.log("Loses: " + loseCount);
                return lose;
            }
        } else {
            playerScissorsCount++;
            if(computerSelection === "Paper"){
                console.log( "You Win! Scissors beats Paper!");
                winCount++;
                console.log("Wins: " + winCount);
                return win;
            } else if (computerSelection === "Scissors"){
                console.log( "Tie Game! You both chose Scissors!");
                tieCount++;
                console.log("Ties: " + tieCount);
                return tie;
            } else {
                console.log( "You Lose! Scissors loses to Rock!");
                loseCount++;
                console.log("Loses: " + loseCount);
                return lose;
            }
        }
    }else {
        console.log("invalid player selection");
    }
}



function game(){
    let isOver = false;
    
    while(!isOver){
    playRound(prompt(),computerPlay());
    let total = winCount + loseCount + tieCount;
    if(winCount == 5){
        console.log("oh shit you got me");
        console.log("Total Rounds Played: " + total);
        isOver = true;
    } else if (loseCount == 5){
        console.log("GOODBYE LOSER");
        console.log("Total Rounds Played: " + total);
        isOver = true;
    }
    }
}

function statCheck(){
    console.log("Rocks Thrown at the Enemy: " + playerRockCount);
    console.log("Paper Flung at the Enemy: " + playerPaperCount);
    console.log("Scissors Hurled at the Enemy: " + playerScissorsCount);
    console.log("Rocks Thrown at the Player: " + enemyRockCount);
    console.log("Paper Flung at the Player: " + enemyPaperCount);
    console.log("Scissors Hurled at the Player: " + enemyScissorsCount);
}

