console.log("To start a game, write and enter startGame();");

function computerPlay(){
    return Math.floor(Math.random() * 3);
}

function userPlay(){
    return window.prompt("Enter rock, paper, or scissors below.","rock");
}

let point = 0;

function startGame(){
   for (let i = 0; i<=4; i++){
       game();
   }
   tallyPoints(point);
}

function game(){
    userSelection = userPlay();
    userSelection = convertUserInput(userSelection);
    computerSelection = computerPlay();
    computerSelection = convertComputerInput(computerSelection);
    compareSelection(userSelection,computerSelection);
    addPoint(userSelection,computerSelection);
}

function convertUserInput(userSelection){
    return userSelection.toLowerCase();
}

function convertComputerInput(computerSelection){
    switch(computerSelection){
        case 0:
            return computerSelection = "rock";
        case 1:
            return computerSelection = "paper";
        case 2:
            return computerSelection = "scissors";
    }
}

function compareSelection(userSelection,computerSelection){
    if(userSelection == computerSelection){
        return console.log(`You played ${userSelection}. The computer played ${computerSelection}. It's a draw!`);
    }
    else if(userSelection == "rock" && computerSelection == "scissors" || userSelection == "paper" && computerSelection == "rock" || userSelection == "scissors" && computerSelection == "paper"){
        return console.log(`You played ${userSelection}. The computer played ${computerSelection}. You win!`);
    }
    else if (userSelection == "rock" && computerSelection == "paper" || userSelection == "paper" && computerSelection == "scissors" || userSelection == "scissors" && computerSelection == "rock"){
        return console.log(`You played ${userSelection}. The computer played ${computerSelection}. You lose!`);
    }
    else{
        return console.log(`You played ${userSelection}. Please enter in rock, paper, or scissors next time.`);
    }
}

function addPoint(userSelection,computerSelection){
    if(userSelection == "rock" && computerSelection == "scissors" || userSelection == "paper" && computerSelection == "rock" || userSelection == "scissors" && computerSelection == "paper"){
        return point++;
    }
}

function tallyPoints(point){
    if(point > "2"){
        return console.log(`You won ${point} out of 5 rounds. Congratulations! You won!`);
    }
    else{
        return console.log(`You won ${point} out of 5 rounds. Sorry, you lost!`);
    }
}

