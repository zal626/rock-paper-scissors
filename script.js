function computerPlay(){
    const computerOptions = ['rock', 'paper', 'scissor'];
    const computerPick = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerPick];
    return computerChoice;
}
function playRound (playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        return 'It is a tie!';
    }
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return 'Computer win!';
        }
        else{
            return 'Player win!';
        }
    }
    if(playerSelection === 'scissor'){
        if(computerSelection === 'paper'){
            return 'Player win!';
        }
        else{
            return 'Computer win!';
        }
    }
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissor'){
            return 'Computer win!';
        }
        else{
            return 'Player win!';
        }
    }
}
const playerSelection = prompt('Do you choose rock, paper, or scissor?').toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));