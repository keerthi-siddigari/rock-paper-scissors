const computerDisplay=document.getElementById("computerDisplay");
const playerDisplay=document.getElementById("playerDisplay");
const resultDisplay=document.getElementById("result");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;
const choices=["Rock","Paper","Scissors"];

function playgame(playerChoice){
  const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice){
       result="IT'S A TIE";
    }else{
         switch(playerChoice){
            case "Rock":
             result=(computerChoice==="Scissors")?"YOU WIN!":"YOU LOSE!";
             break;
            case "Paper":
              result=(computerChoice==="Rock")?"YOU WIN!":"YOU LOSE!"; 
              break;  
            case "Scissors":
             result=(computerChoice==="Paper")?"YOU WIN!":"YOU LOSE!";
             break;    
         }
    }
    playerDisplay.textContent=`Player: ${playerChoice}`;
    computerDisplay.textContent=`Computer: ${computerChoice}`;
    resultDisplay.textContent=result;
    
    resultDisplay.classList.remove("greenText","redText"); 
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=`${playerScore}`;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=`${computerScore}`;
            break;   
    }
}