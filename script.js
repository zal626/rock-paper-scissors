let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const computerOptions = ['rock', 'paper', 'scissor'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound (playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        roundResult.textContent = 'It\'s a tie!';
    }else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            computerScore++; 
            roundResult.textContent = 'Computer wins! Paper beats rock';    
        }else{
            playerScore++;    
            roundResult.textContent = 'Player wins! Rock beats scissor'; 
        }
    }else if(playerSelection === 'scissor'){
        if(computerSelection === 'rock'){
            computerScore++;   
            roundResult.textContent = 'Computer wins! Rock beats scissor';  
        }else{
            playerScore++;   
            roundResult.textContent = 'Player wins! Scissor beats paper';   
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'scissor'){
            computerScore++; 
            roundResult.textContent = 'Computer wins! Scissor beats paper'; 
        }else{
            playerScore++;
            roundResult.textContent = 'Player wins! Paper beats rock'; 
        }
    }
}
const roundResult = document.getElementById('#round-result');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const playerSelection = [rockBtn, paperBtn, scissorBtn];
playerSelection.forEach(selection =>{
    selection.addEventListener('click', playRound(playerSelection, computerPlay()))
});
console.log(playRound);
/*function game(){
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
game();*/


