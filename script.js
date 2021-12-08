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

let userPoint = 0;
let cpuPoint = 0;

const cardItem = document.querySelectorAll("div.choice")

//Clicking on a card will start a round of rock paper scissors
cardItem.forEach(function(card){
    card.addEventListener("click",function(){
        let userSelection = card.id
        let computerSelection = computerChoice();
        compareSelection(userSelection,computerSelection);
        addPoint(userSelection,computerSelection);
        showResultPanel();
        displayEmoji(userSelection,computerSelection);
        displaySelection(userSelection,computerSelection);
        displayScore(userPoint,cpuPoint);
        tallyPoints(userPoint,cpuPoint);
        resetGame(userPoint,cpuPoint);
    });
});

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

function displaySelection(userSelection,computerSelection){
    const userResult = document.querySelector("#user p.choice-name")
    const computerResult = document.querySelector("#cpu p.choice-name")
    userResult.textContent = `${userSelection}`;
    computerResult.textContent = `${computerSelection}`;
}

function compareSelection(userSelection,computerSelection){
    const judgment = document.getElementById("judge")

    if(userSelection === computerSelection){
        judgment.textContent = "It's a draw!";
    }
    else if(userSelection === counterChoice[computerSelection]){
       judgment.textContent = "You win!";
    }
    else{
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
    if(userSelection === counterChoice[computerSelection]){
        return userPoint++;
    }
    else if (computerSelection === counterChoice[userSelection]){
        return cpuPoint++;
    }
    else{
        //Don't add any points if it's a draw
    }
}

function tallyPoints(userPoint,cpuPoint){
    if(userPoint === 5){
        alert("You Win!");
    }
    else if (cpuPoint === 5){
        alert("CPU Win!");
    }
    else{
        //Continue playing new rounds until someone has 5 points
    }

}

function resetGame(userPoint,cpuPoint){
    if(userPoint === 5 || cpuPoint === 5){
        location.reload();
    }
}

