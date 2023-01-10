// GLOBAL VARIABLES 
let score = 0;
let finalScore;


// TIMER VARIABLES
let timeLeft = 5;
let timeInterval;
let timerEl = document.getElementById("timer");


// MAIN SCREEN VARIABLES
let mainHeading = document.querySelector(".main-header");
let mainParagraph = document.querySelector(".main-p");

const startButton = document.querySelector(".start-button");


// VIEW HIGH SCORE SCREEN VARIABLES
let viewHighScores = document.getElementById("high-scores");
let scoreUL = document.getElementById("main-score-list");
let scoreLI;

let allScores = [];


// QUESTION SECTION VARIABLES
let question = document.querySelector(".question");
let answerOne = document.getElementById("answer1");
let answerTwo = document.getElementById("answer2");
let answerThree = document.getElementById("answer3");
let answerFour = document.getElementById("answer4");
let btnOne;
let btnTwo;
let btnThree;
let btnFour;

let msg = document.querySelector(".message");


// ALL DONE VARIABLES
let doneMessage = document.getElementById("all-done");
let scoreMessage = document.getElementById("final-score");
let initEl = document.getElementById("initials");
let subBtn = document.querySelector(".submit-button");
let initMsg;
let initInput;
let initBtn;


// HIGH SCORE SCREEN VARIABLES
let highscoreMessage = document.getElementById("highscore-header");
let clear = document.getElementById("clear-btn");
let back = document.getElementById("back-btn");
let goBackBtn;
let clearHsBtn;

let scoreList = document.querySelector(".score-list");
let addScore;


// TIMER FUNCTION
startButton.addEventListener("click", countDown);

function countDown() {
    timeInterval = setInterval(function () {
        if ( timeLeft >= 0 ) {
            timerEl.textContent = `Time: ${timeLeft}`;
            timeLeft--;
        if ( timeLeft === 0 ) {
                allDoneScreen();
            }
        }    
    }, 1000);
}


// CORRECT FUNCTION FOR IF USER PICKS CORRECT ANSWER
function correctAnswer() {
    score += 20;
    timeLeft += 10;

    msg.textContent = 'CORRECT!';
}

// WRONG FUNCTION FOR IF USER PICKS WRONG ANSWER
function wrongAnswer() {
    score -= 20;
    timeLeft -= 10;

    msg.textContent = 'WRONG!';
}


// QUESTION ONE FUNCTION
startButton.addEventListener("click", questionOne);

function questionOne() {
    mainHeading.remove();
    mainParagraph.remove();
    startButton.remove();

    question.textContent = "1.  Commonly used data types DO NOT include:";

    btnOne = document.createElement("BUTTON");
    btnOne.textContent = "1. Strings";
    answerOne.appendChild(btnOne);
    btnOne.addEventListener("click", function () { 
        wrongAnswer();
        questionTwo();
    })

    btnTwo = document.createElement("BUTTON");
    btnTwo.textContent = "2. Booleans";
    answerTwo.appendChild(btnTwo);
    btnTwo.addEventListener("click", function () { 
        wrongAnswer();
        questionTwo();
    })

    btnThree = document.createElement("BUTTON");
    btnThree.textContent = "3. Alerts";
    answerThree.appendChild(btnThree);
    btnThree.addEventListener("click", function () { 
        correctAnswer();
        questionTwo();
    })

    btnFour = document.createElement("BUTTON");
    btnFour.textContent = "4. Numbers";
    answerFour.appendChild(btnFour);
    btnFour.addEventListener("click", function () { 
        wrongAnswer();
        questionTwo();
    })
}


// QUESTION TWO FUNCTION
function questionTwo() {
    btnOne.remove();
    btnTwo.remove();
    btnThree.remove();
    btnFour.remove();

    question.textContent = "2.  The condition in an if / else statement is enclosed within ___________.";

    
    btnOne = document.createElement("BUTTON");
    btnOne.textContent = "1. Quotes";
    answerOne.appendChild(btnOne);
    btnOne.addEventListener("click", function () { 
        wrongAnswer();
        questionThree();
    })

    btnTwo = document.createElement("BUTTON");
    btnTwo.textContent = "2. Curly Brackets";
    answerTwo.appendChild(btnTwo);
    btnTwo.addEventListener("click", function () { 
        correctAnswer();
        questionThree();
    })

    btnThree = document.createElement("BUTTON");
    btnThree.textContent = "3. Parenthesis";
    answerThree.appendChild(btnThree);
    btnThree.addEventListener("click", function () { 
        wrongAnswer();
        questionThree();
    })

    btnFour = document.createElement("BUTTON");
    btnFour.textContent = "4. Square Brackets";
    answerFour.appendChild(btnFour);
    btnFour.addEventListener("click", function () { 
        wrongAnswer();
        questionThree();
    })
}


// QUESTION THREE FUNCTION
function questionThree() {
    btnOne.remove();
    btnTwo.remove();
    btnThree.remove();
    btnFour.remove();

    question.textContent = "3.  Arrays in JavaScript can be used to store ___________.";

    
    btnOne = document.createElement("BUTTON");
    btnOne.textContent = "1. Numbers and Strings";
    answerOne.appendChild(btnOne);
    btnOne.addEventListener("click", function () { 
        wrongAnswer();
        questionFour();
    })

    btnTwo = document.createElement("BUTTON");
    btnTwo.textContent = "2. Other Arrays";
    answerTwo.appendChild(btnTwo);
    btnTwo.addEventListener("click", function () { 
        wrongAnswer();
        questionFour();
    })

    btnThree = document.createElement("BUTTON");
    btnThree.textContent = "3. Booleans";
    answerThree.appendChild(btnThree);
    btnThree.addEventListener("click", function () { 
        wrongAnswer();
        questionFour();
    })

    btnFour = document.createElement("BUTTON");
    btnFour.textContent = "4. All Of The Above";
    answerFour.appendChild(btnFour);
    btnFour.addEventListener("click", function () { 
        correctAnswer();
        questionFour();
    })
}


// QUESTION FOUR FUNCTION
function questionFour() {
    btnOne.remove();
    btnTwo.remove();
    btnThree.remove();
    btnFour.remove();

    question.textContent = "4.  String values must be enclosed within ___________ when being assigned to variables";

    
    btnOne = document.createElement("BUTTON");
    btnOne.textContent = "1. Commas";
    answerOne.appendChild(btnOne);
    btnOne.addEventListener("click", function () { 
        wrongAnswer();
        questionFive();
    })

    btnTwo = document.createElement("BUTTON");
    btnTwo.textContent = "2. Curly Brackets";
    answerTwo.appendChild(btnTwo);
    btnTwo.addEventListener("click", function () { 
        wrongAnswer();
        questionFive();
    })

    btnThree = document.createElement("BUTTON");
    btnThree.textContent = "3. Quotes";
    answerThree.appendChild(btnThree);
    btnThree.addEventListener("click", function () { 
        correctAnswer();
        questionFive();
    })

    btnFour = document.createElement("BUTTON");
    btnFour.textContent = "4. Parenthesis";
    answerFour.appendChild(btnFour);
    btnFour.addEventListener("click", function () { 
        wrongAnswer();
        questionFive();
    })
}


// QUESTION FIVE FUNCTION
function questionFive() {
    btnOne.remove();
    btnTwo.remove();
    btnThree.remove();
    btnFour.remove();

    question.textContent = "5.  A very useful tool used during development and debugging for printing content to the debugger is:";

    
    btnOne = document.createElement("BUTTON");
    btnOne.textContent = "1. JavaScript";
    answerOne.appendChild(btnOne);
    btnOne.addEventListener("click", function () { 
        wrongAnswer();
        allDoneScreen();
    })

    btnTwo = document.createElement("BUTTON");
    btnTwo.textContent = "2. Terminal / Bash";
    answerTwo.appendChild(btnTwo);
    btnTwo.addEventListener("click", function () { 
        wrongAnswer();
        allDoneScreen();
    })

    btnThree = document.createElement("BUTTON");
    btnThree.textContent = "3. For Loops";
    answerThree.appendChild(btnThree);
    btnThree.addEventListener("click", function () { 
        wrongAnswer();
        allDoneScreen();
    })

    btnFour = document.createElement("BUTTON");
    btnFour.textContent = "4. Console Log";
    answerFour.appendChild(btnFour);
    btnFour.addEventListener("click", function () { 
        correctAnswer();
        allDoneScreen();
    })
}


// ALL DONE SCREEN FUNCTION FOR AFTER THE QUIZ
function allDoneScreen() {
    clearInterval (timeInterval);
    timerEl.textContent = "";
    question.remove();
    btnOne.remove();
    btnTwo.remove();
    btnThree.remove();
    btnFour.remove();
    msg.remove();

    finalScore = `${score + timeLeft}`;

    doneMessage.textContent = "ALL DONE!"
    scoreMessage.textContent = `Your final score is ${finalScore}`;

    initMsg = document.createElement("h4");
    initMsg.textContent = "Enter Initials:";
    initEl.appendChild(initMsg);

    initInput = document.createElement("input");
    initEl.appendChild(initInput);

    initBtn = document.createElement("button");
    initBtn.textContent = "submit";
    subBtn.appendChild(initBtn);
    initBtn.addEventListener("click", function () {
        localStorage.setItem("user", initInput.value);
        localStorage.setItem("Score", finalScore);
        highScoreScreen();
    })
}


// HIGH SCORE SCREEN FUNCTION 
function highScoreScreen() {
    doneMessage.remove();
    scoreMessage.remove();
    initMsg.remove();
    initInput.remove();
    initBtn.remove();

    highscoreMessage.textContent = "HIGHSCORES";

    addScore = document.createElement("li");
    addScore.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("userScore");
    scoreList.appendChild(addScore);

    clearHsBtn = document.createElement("button");
    clearHsBtn.textContent = "Clear Highscores";
    clear.appendChild(clearHsBtn);
    clearHsBtn.addEventListener("click", function () {
        scoreList.remove();
    });
    
    
    goBackBtn = document.createElement("button");
    goBackBtn.textContent = "Go Back";
    back.appendChild(goBackBtn);
    goBackBtn.addEventListener("click", function () {
        window.location.reload();
    })
}


// VIEW HIGHSCORES FUNCTION
viewHighScores.addEventListener("click", function () {
    mainHeading.remove();
    mainParagraph.remove();
    startButton.remove();
    timerEl.remove();
    viewHighScores.remove();

   
    scoreLI = document.createElement("li");

    scoreLI.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("userScore");

    scoreUL.appendChild(scoreLI);

})
