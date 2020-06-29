 
let playerPotez;
let computerPotez;

let demo = document.getElementById("demo");
let results = document.getElementById("win-info");
let round = document.getElementById("roundCounter");
let playerName = document.getElementById("playerName");
let playerNamePrompt;

do {
    playerNamePrompt = prompt("Enter your name: ");
    playerName.innerHTML = "<b>" + playerNamePrompt + "</b>";
    playerName = playerNamePrompt;
} 
while( playerNamePrompt == null || playerNamePrompt.length == 0 );



let counter = 1;

let resultComp = document.getElementById("resultComp");
let resultPlayer = document.getElementById("resultPlayer");

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
    
    if( playerPotez == "rock" && computerPotez == "rock" || playerPotez == "paper" && computerPotez == "paper" || playerPotez == "scissors" && computerPotez == "scissors"){
        results.innerHTML = "draw";
        
    }
    else if( playerPotez == "rock" && computerPotez ==  "scissors" || playerPotez == "paper" && computerPotez == "rock" || playerPotez == "scissors" && computerPotez == "paper"){
        results.innerHTML = "<b>" + playerName + "</b>" + " win this round";
        counterPlayer++;
        resultPlayer.innerHTML = counterPlayer;
        
    }else{
        results.innerHTML = "Computer win this round";
        counterComputer++;
        resultComp.innerHTML = counterComputer;
        
    }

    if(counter > 4){
        if( counterComputer == counterPlayer){
            alert("Everybody wins hehe");
        }
        else if(counterComputer > counterPlayer){
            alert("Computer wins with resultat " + counterComputer + ":" + counterPlayer);
            
        }
        else{
            alert(playerName + " wins with resultat " + counterPlayer + ":" + counterComputer);
            
        }
        counterPlayer = 0;
        counterComputer = 0;
        results.innerHTML = "Let's play";
        resultComp.innerHTML = 0;
        resultPlayer.innerHTML = 0;
        counter = 0;
    }
    round.innerHTML = "<u>" + ++counter  +"</u>";
}