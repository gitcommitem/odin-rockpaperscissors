const choices = ["rock","paper","scissors"]

const handEmoji = {
    rock: "✊",
    paper: "🖐",
    scissors: "✌️"
};

const counterChoice = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
};



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
        displayEmoji(userSelection,computerSelection);
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
    let randomChoice = choices[randomize()];
    return randomChoice
}

function randomize(){
    return Math.floor(Math.random() * choices.length);
}

function displayEmoji(userSelection,computerSelection){
    const userEmoji = document.querySelector("#user p.emoji")
    const cpuEmoji = document.querySelector("#cpu p.emoji")

    userEmoji.textContent = handEmoji[`${userSelection}`];
    cpuEmoji.textContent = handEmoji[`${computerSelection}`];
}

function compareSelection(userSelection,computerSelection){
    const userResult = document.querySelector("#user p.choice-name")
    const computerResult = document.querySelector("#cpu p.choice-name")
    const judgment = document.getElementById("judge")

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
        location.reload();
    }
    else if (cpuPoint === 5){
        alert("CPU Win!");
        location.reload();
    }

}

