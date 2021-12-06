//Selecting all elements that are a div with class "choice"
const cardItem = document.querySelectorAll("div.choice")
//Using forEach loop to add an eventlistener to each card
//Clicking on a card will start a game
cardItem.forEach(function(card){
    card.addEventListener("click",function(){
        card.id
        console.log(card.id)
        showResultPanel();
    });
});

function showResultPanel(){
    const resultPanel = document.getElementById("results")
    if (resultPanel.classList.contains("hidden")){
        resultPanel.classList.remove("hidden");
        }
}



let point = 0;

function computerPlay(){
    return Math.floor(Math.random() * 3);
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
}

function addPoint(userSelection,computerSelection){
    if(userSelection == "rock" && computerSelection == "scissors" || userSelection == "paper" && computerSelection == "rock" || userSelection == "scissors" && computerSelection == "paper"){
        return point++;
    }
}

function tallyPoints(point){
    if(point > 2){
        return console.log(`You won ${point} out of 5 rounds. Congratulations! You won!`);
    }
    else{
        return console.log(`You won ${point} out of 5 rounds. Sorry, you lost!`);
    }
}

function game(){
    let userSelection = userPlay();
    let computerSelection = computerPlay();
    computerSelection = convertComputerInput(computerSelection);
    compareSelection(userSelection,computerSelection);
    addPoint(userSelection,computerSelection);
}

function startGame(){
    for (let i = 0; i<=4; i++){
        game();
    }
    tallyPoints(point);
    point = 0;
 }
 
