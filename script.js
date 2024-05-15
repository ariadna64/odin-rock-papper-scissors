let playerScore = 0;
let computerScore = 0; // SCORES DEFINIDOS EN 0 PARA TOMARLOS LUEGO EN LA FUNCION

const goalScore = 5; //SCORE OBJETIVO

function getComputerChoice() { // FUNCION QUE DEVUELVE PIEDRA, PAPEL O TIJERA RANDOM
    const elements = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * elements.length);
    
    return elements[random];

}

//BOTONES

let rock = document.createElement("button");
rock.textContent = "ROCK";
document.body.appendChild(rock);

eventoRock = rock.addEventListener("click",() => {
    console.log(playRound("ROCK", getComputerChoice()));
})


let paper = document.createElement("button");
paper.textContent = "PAPER";
document.body.appendChild(paper);

eventoPaper = paper.addEventListener("click",() => {
    console.log(playRound("PAPER", getComputerChoice()));
})


let scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
document.body.appendChild(scissors);

eventoScissors = scissors.addEventListener("click",() => {
    console.log(playRound("SCISSORS", getComputerChoice()));
})

// DIV QUE MUESTRA LOS RESULTADOS

let div = document.createElement("div");
document.body.appendChild(div);

//DIVS DEL SCORE

let divPcScore = document.createElement("div");
document.body.appendChild(divPcScore);


let divPlayerScore = document.createElement("div");
document.body.appendChild(divPlayerScore);

//BOTON PARA RECARGAR LA PAGINA

let buttonStart = document.createElement("button");
buttonStart.textContent = "START AGAIN"

document.body.appendChild(buttonStart);
    
function reloadClick() {
    window.location.reload(); //FUNCION QUE RECARGA LA PAGINA
}
    
buttonStart.addEventListener("click", reloadClick);




function playRound(player, computer) {

    let result = "";
    let round_lost = "Oh no! You chose "+player+" and the computer chose "+computer+". You lost the round! ";
    let round_won = "Yes! You chose "+player+" and the computer chose "+computer+". You won the round! ";

 while ((playerScore !== goalScore) && (computerScore !== goalScore)) {  

    if ((player !== "ROCK") || (player !== "PAPER") || (player !== "SCISSORS")) {  // Si el input del player es distinto
        result = div.textContent = "Invalid input. Try again.";                                       // a rock, paper o scissors. 

    } 

    // IF PLAYER WINS
    if ((player === "ROCK" &&  computer === "SCISSORS") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSORS" && computer === "PAPER")) {
        playerScore += 1; // Si ganas aumenta el score
        result = round_won;
        divPlayerScore.textContent = "Your score: "+playerScore+".";
        
        if (playerScore === goalScore) {
            return div.textContent = "You won the match!"
        }
    
    }  // IF COMPUTER WINS
    else if ((player === "SCISSORS" &&  computer === "ROCK") ||
    (player === "ROCK" && computer === "PAPER") ||
    (player === "PAPER" && computer === "SCISSORS")){
        computerScore += 1 // Si perdes aumenta el score de la computadora
        result = round_lost;
        divPcScore.textContent = "Computer score: "+computerScore+".";
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

    

    }



