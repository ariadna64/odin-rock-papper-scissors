let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const element = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * element.length);
    
    return element[random]
    
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    let result = ""
    let round_lost = "Oh no! You chose "+playerSelection+" and the computer chose "+computerSelection+". You lost the round! "
    let round_won = "Yes! You chose "+playerSelection+" and the computer chose "+computerSelection+". You won the round! "


    if ((playerSelection === "Rock" &&  computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore =+ 1
        console.log(result = (round_won + "You\'r score is " + playerScore+". And the computer score is "+computerScore))
        
        if (playerScore === 5) {
            return "You won the match!"
        }
    
    else if (playerSelection === computerSelection) {
        console.log(result = "TIE! Try again!")
    
    }

    else {
        computerScore =+ 1
        console.log(result = (round_lost + "You\'r score is " + playerScore+". And the computer score is "+computerScore))
    }
        if (computerScore === 5) {
            return "You lost the match!"
        }
    }
}


const playerSelection = "Rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));