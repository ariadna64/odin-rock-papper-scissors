let playerScore = 0;
let computerScore = 0; // SCORES DEFINIDOS EN 0 PARA TOMARLOS LUEGO EN LA FUNCION

const goalScore = 5;

function getComputerChoice() { // FUNCION QUE DEVUELVE PIEDRA, PAPEL O TIJERA RANDOM
    const elements = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * elements.length);
    
    return elements[random];
    
}

//BOTONES

let rock = document.createElement("button");
rock.textContent = "ROCK";
document.body.appendChild(rock);

eventoRock = rock.addEventListener("click",() => {
    console.log(playRound("rock", getComputerChoice()));
})


let paper = document.createElement("button");
paper.textContent = "PAPER";
document.body.appendChild(paper);

eventoPaper = paper.addEventListener("click",() => {
    console.log(playRound("paper", getComputerChoice()));
})


let scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
document.body.appendChild(scissors);

eventoScissors = scissors.addEventListener("click",() => {
    console.log(playRound("scissors", getComputerChoice()));
})


function playRound(player, computer) {

    let result = "";
    let round_lost = "Oh no! You chose "+player+" and the computer chose "+computer+". You lost the round! ";
    let round_won = "Yes! You chose "+player+" and the computer chose "+computer+". You won the round! ";
    
    if ((player !== "rock") || (player !== "paper") || (player !== "scissors")) {  // Si el input del player es distinto
        result = div.textContent = "Invalid input. Try again.";                                       // a rock, paper o scissors. 

    } 

    // IF PLAYER WINS
    if ((player === "rock" &&  computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")) {
        playerScore += 1; // Si ganas aumenta el score
        result = round_won + "Your score is " + playerScore+". And the computer score is "+computerScore+".";
        
        if (playerScore === goalScore) {
            return div.textContent = "You won the match!"
        }
    
    }  // IF COMPUTER WINS
    else if ((player === "scissors" &&  computer === "rock") ||
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors")){
        computerScore += 1 // Si perdes aumenta el score de la computadora
        result = round_lost + "Your score is " + playerScore+". And the computer score is "+computerScore+".";
    }
        if (computerScore === goalScore) {
            return div.textContent = "You lost the match!"
        }
        // IF TIE
    else if (player === computer) {
            result = "TIE! Try again!";
        
        }
   
    return div.textContent = result
    }




// WHILE LOOP QUE SE EJECUTA MIENTRAS LOS SCORES SEAN MENORES A 5. TIENE EL PROMPT Y EL ELEMENTO RANDOM DE LA PRIMERA FUNCION.

let div = document.createElement("div");
document.body.appendChild(div);


if ((playerScore < goalScore) && (computerScore < goalScore)) {
   div.textContent = play
} else if (playerScore === goalScore) {
    div.textContent = won;
} else {
   div.textContent = lost;
}


