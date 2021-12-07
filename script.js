//Selecting all elements that are a div with class "choice"
const cardItem = document.querySelectorAll("div.choice")
//Using forEach loop to add an eventlistener to each card
//Clicking on a card will start a game
cardItem.forEach(function(card){
    card.addEventListener("click",function(){
        let userSelection = card.id
        let computerSelection = computerPlay();
        computerSelection = convertComputerInput(computerSelection);
        compareSelection(userSelection,computerSelection);
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
    const userResult = document.querySelector("#user p.choice-name")
    const computerResult = document.querySelector("#cpu p.choice-name")
    const userEmoji = document.querySelector("#user p.emoji")
    const cpuEmoji = document.querySelector("#cpu p.emoji")
    const judgment = document.getElementById("judge")

    //Look into doing a switch? for emoji
    if (userSelection === "rock"){
        userEmoji.textContent = "✊";
    }
    else if (userSelection === "paper"){
        userEmoji.textContent = "🖐";
    }
    else {
        userEmoji.textContent = "✌️";
    }

    if (computerSelection === "rock"){
        cpuEmoji.textContent = "✊";
    }
    else if (computerSelection === "paper"){
        cpuEmoji.textContent = "🖐";
    }
    else {
        cpuEmoji.textContent = "✌️";
    }

    if(userSelection == computerSelection){
        userResult.textContent = `${userSelection}`;
        computerResult.textContent = `${computerSelection}`;
        judgment.textContent = "It's a draw!";
    }
    else if(userSelection == "rock" && computerSelection == "scissors" || userSelection == "paper" && computerSelection == "rock" || userSelection == "scissors" && computerSelection == "paper"){
        userResult.textContent = `${userSelection}`;
        computerResult.textContent = `${computerSelection}`;
       judgment.textContent = "You win!";
    }
    else if (userSelection == "rock" && computerSelection == "paper" || userSelection == "paper" && computerSelection == "scissors" || userSelection == "scissors" && computerSelection == "rock"){
        userResult.textContent = `${userSelection}`;
        computerResult.textContent = `${computerSelection}`;
        judgment.textContent = "You lose!";
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
    addPoint(userSelection,computerSelection);
}

function startGame(){
    for (let i = 0; i<=4; i++){
        game();
    }
    tallyPoints(point);
    point = 0;
 }
 
