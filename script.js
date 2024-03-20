


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    
    if (num === 0) {
        return "Rock"
    } else if (num === 1)
        return "Papper"
    else {
        return "Scissors"
    }
}

console.log(getComputerChoice())


function playRound(playerSelection,computerSelection) {
    if (computerSelection === "Rock" && playerSelection === "Scissors" || computerSelection === "Papper" && playerSelection === "Rock" ||
    computerSelection === "Scissors" && playerSelection === "Papper") {
        return "You lost the round!"
    } else if (computerSelection === "Scissors" && playerSelection === "Rock" || computerSelection === "Rock" && playerSelection === "Papper" ||
    computerSelection === "Papper" && playerSelection === "Scissors") {
        return "You won the round!"
    } else if (computerSelection === playerSelection) {
        return "The round is a Tie!"}
    }

const playerSelection = "Rock"
const computerSelection = getComputerChoice().toLowerCase;
console.log(playRound(playerSelection, computerSelection));