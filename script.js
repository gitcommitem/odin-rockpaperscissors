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
        decideWinner(userSelection,computerSelection);
        showResultPanel();
        displayEmoji(userSelection,computerSelection);
        displaySelection(userSelection,computerSelection);
        displayScore(userPoint,cpuPoint);
        endGame(userPoint,cpuPoint);
    });
});

function randomize(){
    return Math.floor(Math.random() * choices.length);
}

function computerChoice(){
    let randomChoice = choices[randomize()];
    return randomChoice
}

function decideWinner(userSelection,computerSelection){
    const judgment = document.getElementById("judge")

    if(userSelection === computerSelection){
        judgment.textContent = "It's a draw!";
        //Don't add any points if it's a draw
    }
    else if(userSelection === counterChoice[computerSelection]){
       judgment.textContent = "You win!";
       return userPoint++;
    }
    else{
        judgment.textContent = "You lose!";
        return cpuPoint++;
    }
}

function showResultPanel(){
    const resultPanel = document.getElementById("results")
    if (resultPanel.classList.contains("hidden")){
        resultPanel.classList.remove("hidden");
     }
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

function displayScore(userPoint,cpuPoint){
    const userScore = document.getElementById("user-score")
    const cpuScore = document.getElementById("cpu-score")
    userScore.textContent = `${userPoint}`;
    cpuScore.textContent = `${cpuPoint}`;
}

function tallyPoints(userPoint){
    //timeout for safari and chrome browsers to paint updated DOM before alert pops
    if(userPoint === 5){
       setTimeout(function(){
        alert("You Win!");
       },100);
    }
    else{
        setTimeout(function(){
            alert("CPU Win!");
           },100);
    }

}

function resetGame(){
    //timeout for safari and chrome browsers so reload happens after alert pops
    setTimeout(function(){
        location.reload();
       },100);    
}

function endGame(userPoint,cpuPoint){
    if(userPoint === 5 || cpuPoint === 5){
        tallyPoints(userPoint);
        resetGame();
}
}
