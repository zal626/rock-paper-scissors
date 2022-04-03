let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const computerOptions = ['rock', 'paper', 'scissor'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound (playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        playerScore;
        computerScore;
    }else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            computerScore++;      
        }else{
            playerScore++;     
        }
    }else if(playerSelection === 'scissor'){
        if(computerSelection === 'rock'){
            computerScore++;    
        }else{
            playerScore++;      
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'scissor'){
            computerScore++; 
        }else{
            playerScore++;
        }
    }
}

function game(){
    let gameRounds = 0;
    for(i = 0; i < 5; i++){
        const playerSelection = prompt('Do you choose rock, paper, or scissor?', 'rock').toLowerCase();
        gameRounds += playRound(playerSelection, computerPlay());
        console.log(`Round ` + (i + 1));
        console.log(`Your score is: ${playerScore}`);
        console.log(`The computer score is: ${computerScore}`);
    }
    if (playerScore > computerScore){
        console.log(`You won the game!`);
    }else if (computerScore > playerScore){
        console.log(`Computer have won!`);
    }else{
        console.log('No one wins!');
    }
}
game();


