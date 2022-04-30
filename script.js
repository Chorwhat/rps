let playerSelection;
let win = "win";
let tie = "tie";
let lose = "lose";
let winCount = 0;
let loseCount = 0;
let tieCount = 0;
let total = 0;
let playerPaperCount = 0;
let playerRockCount = 0;
let playerScissorsCount = 0;
let enemyPaperCount = 0;
let enemyRockCount = 0;
let enemyScissorsCount = 0;
let victoriousRock = 0;
let victoriousPaper = 0;
let victoriousScissor = 0;
let victoriousEnemyRock = 0;
let victoriousEnemyPaper = 0;
let victoriousEnemyScissor = 0;


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
    } else if(d3Roll === 2){
        computersChoice = "Paper";
    } else {
        computersChoice = "Scissors";
    }
    return computersChoice;
}


function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    
    
    if (playerChoice === "r" || playerChoice === "p" || playerChoice === "s"){
        total++;
        if(playerChoice === "r"){
            playerRockCount++;
            if(computerSelection === "Scissors"){
                console.log( "You Win! Rock beats Scissors!");
                winCount++;
                enemyScissorsCount++;
                victoriousRock++;
                console.log("Wins: " + winCount);
                return win;
            } else if (computerSelection === "Rock"){
                console.log( "Tie Game! You both chose Rock!");
                tieCount++;
                enemyRockCount++;
                console.log("Ties: " + tieCount);
                return tie;
            } else {
                console.log( "You Lose! Rock loses to Paper!");
                loseCount++;
                enemyPaperCount++;
                victoriousEnemyPaper++;
                console.log("Loses: " + loseCount);
                return lose;
            }
        }
        else if(playerChoice === "p"){
            playerPaperCount++;
            if(computerSelection === "Rock"){
                console.log( "You Win! Paper beats Rock!");
                winCount++;
                enemyRockCount++;
                victoriousPaper++;
                console.log("Wins: " + winCount);
                return win;
            } else if (computerSelection === "Paper"){
                console.log( "Tie Game! You both chose Paper!");
                tieCount++;
                enemyPaperCount++;
                console.log("Ties: " + tieCount);
                return tie;
            } else {
                console.log( "You Lose! Paper loses to Scissors!");
                loseCount++;
                enemyScissorsCount++;
                victoriousEnemyScissor++;
                console.log("Loses: " + loseCount);
                return lose;
            }
        } else {
            playerScissorsCount++;
            if(computerSelection === "Paper"){
                console.log( "You Win! Scissors beats Paper!");
                winCount++;
                enemyPaperCount++;
                victoriousScissor++;
                console.log("Wins: " + winCount);
                return win;
            } else if (computerSelection === "Scissors"){
                console.log( "Tie Game! You both chose Scissors!");
                tieCount++;
                enemyScissorsCount++;
                console.log("Ties: " + tieCount);
                return tie;
            } else {
                console.log( "You Lose! Scissors loses to Rock!");
                loseCount++;
                enemyRockCount++;
                victoriousEnemyRock++;
                console.log("Loses: " + loseCount);
                return lose;
            }
        }
    }else {
        console.log("invalid player selection, Redo round: " + (loseCount + tieCount + winCount + 1));
    }
}



function game(){
    let isOver = false;
    
    while(!isOver){
    playRound(prompt(),computerPlay());
    
    if(winCount == 5){
        console.log("oh shit you got me");
        
        statCheck();
        isOver = true;
    } else if (loseCount == 5){
        console.log("GOODBYE LOSER");
        statCheck();
        isOver = true;
    }
    }
}

function statCheck(){
    console.log("");
    console.log("------------- STAT CHECK -----------------");
    console.log("Total Rounds Played: " + total);
    console.log("Final Score: " + winCount +" : " + loseCount + " with " + tieCount + " ties");
    console.log("------------- PLAYER SCORE ---------------");
    console.log("");
    console.log("Rocks Thrown at the Enemy: " + playerRockCount + " , " + victoriousRock + " of which were successful");
    console.log("Paper Flung at the Enemy: " + playerPaperCount + " , " + victoriousPaper + " of which were successful");
    console.log("Scissors Hurled at the Enemy: " + playerScissorsCount  + " , " + victoriousScissor + " of which were successful");
    console.log("------------- ENEMY SCORE ----------------");
    console.log("");
    console.log("Rocks Thrown at the Player: " + enemyRockCount + " , " + victoriousEnemyRock + " of which were successful");
    console.log("Paper Flung at the Player: " + enemyPaperCount + " , " + victoriousEnemyPaper + " of which were successful");
    console.log("Scissors Hurled at the Player: " + enemyScissorsCount + " , " + victoriousEnemyScissor + " of which were successful");
}

