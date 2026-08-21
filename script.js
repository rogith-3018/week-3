console.log("game ready");
let youScore=0;
let computerScore=0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

function computerPick() {
    let choices = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}

function whoWins(you, computer) {

    if (you === computer) {
        return "tie";
    }

    if (
        (you === "rock" && computer === "scissor") ||
        (you === "paper" && computer === "rock") ||
        (you === "scissor" && computer === "paper")
    ) {
        return "you";
    }

    return "computer";
}

function play(you) {
      if(youScore===3 ||computerScore===3){
        return;
      }

    let computer = computerPick();
    let winner = whoWins(you, computer);


    if (winner === "you") {
        youScore++;
        document.querySelector("#result").textContent =
            `You win! ${you} beats ${computer}.`;
    }
    else if (winner === "computer") {       computerScore++;
        document.querySelector("#result").textContent =
            `Computer wins! ${computer} beats ${you}.`;
    }
    else {
        document.querySelector("#result").textContent =
            "It's a tie!";
    }
    document.querySelector("#score").textContent=`you ${youScore} - ${computerScore} computer`;

if(youScore===3){
    document.querySelector("#result").textContent = "You won the game!";
}
else if(computerScore===3){
    document.querySelector("#result").textContent = "Computer won the game!";
}
}


rock.addEventListener("click", function () {
    play("rock");
});

paper.addEventListener("click", function () {
    play("paper");
});

scissor.addEventListener("click", function () {
    play("scissor");
});

