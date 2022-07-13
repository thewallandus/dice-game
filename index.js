let player1Score = 0;
let player2Score = 0;
let player1Turn = true;


const score1 = document.getElementById("player1Scoreboard");
const score2 = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function changeDisplay() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


 rollBtn.addEventListener("click", runEvent);
 resetBtn.addEventListener("click", resetGame);
 
 
 function runEvent() {
     
     let randomNum = Math.floor(Math.random() * 6) + 1;
     
     if (player1Turn) {
        player1Score += randomNum;
        score1.textContent = player1Score;
        player1Dice.textContent = randomNum;
        message.textContent = `Player 2 Turn`;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
     } else {
        player2Score += randomNum;
        score2.textContent = player2Score;
        player2Dice.textContent = randomNum;
        message.textContent = `Player 1 Turn`;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
     }
     
    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳"
        changeDisplay()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🎉"
        changeDisplay()
    }
     
     player1Turn = !player1Turn
 }
 

 function resetGame() {
        message.textContent = `Player 1 Turn`
        player1Turn = true
        player1Score = 0;
        player2Score = 0;
        player1Scoreboard.textContent = player1Score;
        player2Scoreboard.textContent = player2Score;
        player1Dice.textContent = "-"
        player2Dice.textContent = "-"
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
        rollBtn.style.display = "block"
        resetBtn.style.display = "none"
 }