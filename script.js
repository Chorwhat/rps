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
