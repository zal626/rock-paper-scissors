let playerScore = 0;
let computerScore = 0;
const roundResult = document.getElementById('round-result');

function computerPlay(){
    const computerOptions = ['rock', 'paper', 'scissor'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
function playRound(playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        roundResult.textContent = `It's a tie! ${computerSelection} vs ${playerSelection}`;
    }else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            roundResult.textContent = 'Computer wins! Paper beats rock';  
            computerScore++; 
        }else{       
            roundResult.textContent = 'Player wins! Rock beats scissor'; 
            playerScore++;   
        }
    }else if(playerSelection === 'scissor'){
        if(computerSelection === 'rock'){        
            roundResult.textContent = 'Computer wins! Rock beats scissor';  
            computerScore++;
        }else{ 
            roundResult.textContent = 'Player wins! Scissor beats paper';  
            playerScore++;   
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'scissor'){  
            roundResult.textContent = 'Computer wins! Scissor beats paper';  
            computerScore++;
        }else{     
            roundResult.textContent = 'Player wins! Paper beats rock'; 
            playerScore++;
        }
    }
}
const choices = document.querySelectorAll('.choices');
choices.forEach((choice) => {
    choice.addEventListener('click', () => { 
        const playerChoice = choice.id;
        playRound(playerChoice, computerPlay());
        updateScores();
       if(checkWinner()){
            gameOver();
        }
    }); 
});
function updateScores(){
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}
function checkWinner(){
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "You won the game!" : "Computer won! Better luck next time.";
        roundResult.textContent = winner;
        return true;
    }
    return false;
}
function gameOver(){
    const message = document.querySelector('#message');
    const restart = document.querySelector('.restart');
    const roundResult = document.querySelector('#round-result');
    choices.forEach((choice) => { choice.style.display = 'none';})
    message.innerText = 'Game Over!';
    message.style.fontSize = '2rem';
    if(checkWinner()){
        roundResult.style.fontSize = '1rem';
    }
    restart.style.display = 'flex';
    restart.addEventListener('click', () => {
        window.location.reload();
    });
}












