function computerPlay(){
    const computerOptions = ['rock', 'paper', 'scissor'];
    const computerPick = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerPick];
    return computerChoice;
}

function playRound (playerSelection, computerSelection){
    const tie = 'It is a tie!';
    const computerWin = 'Computer win this round!';
    const playerWin = 'Player win this round!';

    if (computerSelection === playerSelection){
        return tie;
    }
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return computerWin;
        }
        else{
            return playerWin;
        }
    }
    if(playerSelection === 'scissor'){
        if(computerSelection === 'paper'){
            return playerWin;
        }
        else{
            return computerWin;
        }
    }
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissor'){
            return computerWin;
        }
        else{
            return playerWin;
        }
    }
    else{
        return 'Invalid input!';
    }
}
const playerSelection = prompt('Do you choose rock, paper, or scissor?').toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game(){

}