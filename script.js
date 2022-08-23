let scoreComputer = 0;
let scorePlayer = 0;


function getComputerChoice () {
    const items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random()*items.length)];   
}

function playRound(playerSelection, computerSelection) {


    if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock") ) {
        
        ++scoreComputer;
        
        let scoreImgComputer = "img/number" + scoreComputer + ".png";
        let img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", scoreImgComputer);

        document.querySelector("h1").textContent = `Computer chooses:  ${computerSelection}. You lose the round!`

    } else if ((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissors")) {
        
        ++scorePlayer;
        
        let scoreImgPlayer = "img/number" + scorePlayer + ".png";
        let img2 = document.querySelectorAll("img")[1];
        img2.setAttribute("src", scoreImgPlayer);

        document.querySelector("h1").textContent = `Computer chooses:  ${computerSelection}. You win the round!`
        
    }else {
        document.querySelector("h1").textContent = `Computer chooses:  ${computerSelection}. Tie!`
    }
}

    
for (j = 0; j < document.querySelectorAll(".button").length; j++){
    document.querySelectorAll(".button")[j].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    if(scoreComputer < 5 && scorePlayer < 5) {
        let computerSelection = getComputerChoice();
        switch (buttonInnerHTML) {
            
            case "Rock":
                playerSelection ="rock"
                break;
        
            case "Paper":
                playerSelection = "paper";
                break;
        
            case "Scissors":
                playerSelection = "scissors";
                break;
        }
        playRound(playerSelection, computerSelection)
 
    }
    announceWinner();
    });
         
}
  

 function announceWinner() {
    if(scoreComputer === 5) {
        document.querySelector("h1").textContent = `Game over! You lost!`;
    } else if (scorePlayer === 5) {
        document.querySelector("h1").textContent = `Congratulations! You beat the computer!`
    }
 }   







