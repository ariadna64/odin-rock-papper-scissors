let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const elements = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * elements.length);
    
    return elements[random];
    
}


function playRound(player, computer) {

    let result = "";
    let round_lost = "Oh no! You chose "+player+" and the computer chose "+computer+". You lost the round! ";
    let round_won = "Yes! You chose "+player+" and the computer chose "+computer+". You won the round! ";

    console.log(computer)

    
    // IF PLAYER WINS
    if ((player === "rock" &&  computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")) {
        playerScore += 1;
        result = round_won + "You\'r score is " + playerScore+". And the computer score is "+computerScore;
        console.log(result);
        
        if (playerScore === 5) {
            return "You won the match!"
        }
    
    }  // IF COMPUTER WINS
    else if ((player === "scissors" &&  computer === "rock") ||
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors")){
        computerScore += 1
        result = round_lost + "You\'r score is " + playerScore+". And the computer score is "+computerScore;
        console.log(result);
    }
        if (computerScore === 5) {
            return "You lost the match!"
        }
        // IF TIE
    else if (player === computer) {
            result = "TIE! Try again!";
            console.log(result);
        
        }
    
    }


const playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

