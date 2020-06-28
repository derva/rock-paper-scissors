 
let playerPotez;
let computerPotez;

let demo = document.getElementById("demo");
let round = document.getElementById("roundCounter");
let playerName = document.getElementById("playerName");
let playerNamePrompt;

do {
    playerNamePrompt = prompt("Enter your name: ");
    playerName.innerHTML = playerNamePrompt;
} 
while( playerNamePrompt == null || playerNamePrompt.length == 0 );



let counter = 1;

let counterPlayer = 0;
let counterComputer = 0;


function playerMove(d){
    if(d==1){
        playerPotez = "rock";
    }
    else if(d==2){
        playerPotez = "paper";
    }else{
        playerPotez = "scissors";
    }
    console.log("Player Potez = " + playerPotez);
}

function computerMove(){
    computerPotez = Math.floor(Math.random()* (3)+1);
    if(computerPotez==1){
        computerPotez = "rock";
    }
    else if(computerPotez==2){
        computerPotez = "paper";
    }else{
        computerPotez = "scissors";
    }
    console.log("Computer Potez = " + computerPotez);
}

function potez(){
    
    /*if( playerPotez < computerPotez ){
        demo.innerHTML = "playerPotez < computerPotez";
        counterComputer++;
    }
    else if( playerPotez == computerPotez){
        demo.innerHTML = "playerPotez = computerPotez";
    }
    else{
        demo.innerHTML = "playerPotez > computerPotez";
        counterPlayer++;
    }*/

    if( playerPotez == "rock" && computerPotez == "rock" || playerPotez == "paper" && computerPotez == "paper" || playerPotez == "scissors" && computerPotez == "scissors"){
        demo.innerHTML = "draw";
    }
    else if( playerPotez == "rock" && computerPotez ==  "scissors" || playerPotez == "paper" && computerPotez == "rock" || playerPotez == "scissors" && computerPotez == "paper"){
        demo.innerHTML = playerName + " win";
        counterPlayer++;
    }else{
        demo.innerHTML = "Computer win this round";
        counterComputer++;
    }

    if(counter > 4){
        if( counterComputer == counterPlayer){
            alert("Everybody wins hehe");
        }
        else if(counterComputer > counterPlayer){
            alert("Computer wins with resultat " + counterComputer + ":" + counterPlayer);
            counterPlayer = 0;
            counterComputer = 0;
        }
        else{
            alert(playerName + " wins with resultat " + counterPlayer + ":" + counterComputer);
            counterPlayer = 0;
            counterComputer = 0;
        }
        counter = 0;
    }
    round.innerHTML = "<u>" + ++counter +"</u>";
}