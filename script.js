let playerScore = 0
let computerScore = 0 // SCORES DEFINIDOS EN 0 PARA TOMARLOS LUEGO EN LA FUNCION

function getComputerChoice() { // FUNCION QUE DEVUELVE PIEDRA, PAPEL O TIJERA RANDOM
    const elements = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * elements.length);
    
    return elements[random];
    
}


function playRound(player, computer) {

    let result = "";
    let round_lost = "Oh no! You chose "+player+" and the computer chose "+computer+". You lost the round! ";
    let round_won = "Yes! You chose "+player+" and the computer chose "+computer+". You won the round! ";

    
    // IF PLAYER WINS
    if ((player === "rock" &&  computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")) {
        playerScore += 1; // Si ganas aumenta el score
        result = round_won + "Your score is " + playerScore+". And the computer score is "+computerScore;
        console.log(result);
        
        if (playerScore === 5) {
            return "You won the match!"
        }
    
    }  // IF COMPUTER WINS
    else if ((player === "scissors" &&  computer === "rock") ||
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors")){
        computerScore += 1 // Si perdes aumenta el score de la computadora
        result = round_lost + "Your score is " + playerScore+". And the computer score is "+computerScore;
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

// WHILE LOOP QUE SE EJECUTA MIENTRAS LOS SCORES SEAN MENORES A 5. TIENE EL PROMPT Y EL ELEMENTO RANDOM DE LA PRIMERA FUNCION.

while (playerScore < 5 && computerScore < 5) { 
    const playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
