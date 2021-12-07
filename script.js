//Selecting all elements that are a div with class "choice"
const cardItem = document.querySelectorAll("div.choice")
//Using forEach loop to add an eventlistener to each card
//Clicking on a card will start a game
cardItem.forEach(function(card){
    card.addEventListener("click",function(){
        let userSelection = card.id
        let computerSelection = computerChoice();
        compareSelection(userSelection,computerSelection);
        addPoint(userSelection,computerSelection);
        showResultPanel();
        displayScore(userPoint,cpuPoint);
        tallyPoints(userPoint,cpuPoint);
    });
});

let userPoint = 0;
let cpuPoint = 0;

function showResultPanel(){
    const resultPanel = document.getElementById("results")
    if (resultPanel.classList.contains("hidden")){
        resultPanel.classList.remove("hidden");
     }
}

function computerChoice(){
    let computerInput = randomize();
    return convertComputerInput(computerInput);
}

function randomize(){
    return Math.floor(Math.random() * 3);
}

function convertComputerInput(computerInput){
    switch(computerInput){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
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

function displayScore(userPoint,cpuPoint){
    const userScore = document.getElementById("user-score")
    const cpuScore = document.getElementById("cpu-score")
    userScore.textContent = `${userPoint}`;
    cpuScore.textContent = `${cpuPoint}`;
}


function addPoint(userSelection,computerSelection){
    if(userSelection == "rock" && computerSelection == "scissors" || userSelection == "paper" && computerSelection == "rock" || userSelection == "scissors" && computerSelection == "paper"){
        return userPoint++;
    }
    else if (userSelection == "rock" && computerSelection == "paper" || userSelection == "paper" && computerSelection == "scissors" || userSelection == "scissors" && computerSelection == "rock"){
        return cpuPoint++;
    }
}

function tallyPoints(userPoint,cpuPoint){
    if(userPoint === 5){
        alert("You Win!");
    }
    else if (cpuPoint === 5){
        alert("CPU Win!");
    }
}

