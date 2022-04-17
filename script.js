let playerScore = 0;
let computerScore = 0;
const roundResult = document.getElementById('round-result');

function computerPlay(){
    const computerOptions = ['rock', 'paper', 'scissor'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
function moveUpdate(playerSelection, computerSelection){
    document.getElementById('player-move').src = `./images/${playerSelection}.png`;
    document.getElementById('computer-move').src = `./images/${computerSelection}.png`;
}
function playRound(playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        roundResult.textContent = 'It\'s a tie!';
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
        moveUpdate(playerChoice, computerPlay());
        scoreUpdate();
        if(checkWinner()){
            playerScore = computerScore = 0;
            scoreUpdate();
        }
    }); 
});
function scoreUpdate () {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}
function checkWinner(){
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "You have won the game!" : "Computer won the game! Better luck next time.";
        roundResult.textContent = winner;
        return true;
    }
    return false;
}










