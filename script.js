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
