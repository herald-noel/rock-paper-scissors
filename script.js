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
    if (playerSelection === computerSelection) return 2;
    else if (playerSelection === 'paper' && computerSelection === 'rock') return 1;
    else if (playerSelection === 'rock' && computerSelection === 'scissors') return 1;
    else if (playerSelection === 'scissors' && computerSelection === 'paper') return 1;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (true) {
        const playerChoice = playerSelection();
        const computerChoice = getComputerChoice();

        let winner = playRound(playerChoice, computerChoice);

        if (winner == 1) {
            playerScore++;
            alert(`You win! ${playerChoice} beats ${computerChoice}.   Score is ${playerScore} - ${computerScore}`);
        }
        else if (winner == 2) {
            alert(`It's a tie!   Score is ${playerScore} - ${computerScore}`);
        }
        else {
            computerScore++;
            alert(`You lose! ${computerChoice} beats ${playerChoice}.   Score is ${playerScore} - ${computerScore}`);
        }

        if (playerScore === 5 || computerScore === 5) break;
    }
}

game();