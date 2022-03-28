function computerPlay(){
    const computerOptions = ['rock', 'paper', 'scissor'];
    const computerPick = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerPick];
    return computerChoice;
}
