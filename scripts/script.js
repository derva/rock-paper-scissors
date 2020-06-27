
let playerPotez;
let computerPotez;

let demo = document.getElementById("demo");
let round = document.getElementById("roundCounter");
let counter = 1;

let counterPlayer = 0;
let counterComputer = 0;

function playerMove(d){
    playerPotez = d;
    console.log("Player Potez = " + playerPotez);
}

function computerMove(){
    computerPotez = Math.floor(Math.random()* (3)+1);
    console.log("Computer Potez = " + computerPotez);
}

function potez(){
    if( playerPotez < computerPotez ){
        demo.innerHTML = "playerPotez < computerPotez";
        counterComputer++;
    }
    else if( playerPotez == computerPotez){
        demo.innerHTML = "playerPotez = computerPotez";
    }
    else{
        demo.innerHTML = "playerPotez > computerPotez";
        counterPlayer++;
    }
    if(counter > 4){
        if(counterComputer > counterPlayer){
            alert("Computer wins with resultat " + counterComputer + ":" + counterPlayer);
        }
        else{
            alert("Player wins with resultat " + counterPlayer + ":" + counterComputer);
        }
        counter = 0;
    }
    round.innerHTML = "<u>" + counter++ +"</u>";
}