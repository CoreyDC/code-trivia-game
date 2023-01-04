// GLOBAL VARIABLES 

// Timer Variables
let timeLeft = 100;
let timeInterval;
let timerEl = document.getElementById("timer");
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", countDown);
// startButton.addEventListener("click", questionOne);

// Timer function
function countDown() {
    timeInterval = setInterval(function () {
       if ( timeLeft >= 0 ) {
        timerEl.textContent = `Time: ${timeLeft}`;
        timeLeft--;
       }
    }, 1000);
}




