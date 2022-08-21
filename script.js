function getComputerChoice() {
    const compChoice = [
        "rock", 
        "paper", 
        "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    let answer = compChoice[randomNum];
    return answer;
}

function playerSelection() {
    let answer = prompt("Rock, Paper, Scissors");
    return answer.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let flag = 0;
    if (playerSelection === computerSelection) return 'It\'s a tie!';
    else if (playerSelection === 'paper' && computerSelection === 'rock') flag = 1;
    else if (playerSelection === 'rock' && computerSelection === 'scissors') flag = 1;
    else if (playerSelection === 'scissors' && computerSelection === 'paper') flag = 1;
    
    if (flag) return `You win! ${playerSelection} beats ${computerSelection}.`;
    else `You lose! ${computerSelection} beats ${playerSelection}.`;
}
