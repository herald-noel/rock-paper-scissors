function getComputerChoice() {
    const compChoice = [
        "rock", 
        "paper", 
        "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    let answer = compChoice[randomNum];
    console.log(answer);
}
