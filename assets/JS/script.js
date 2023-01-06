// GLOBAL VARIABLES 
let score = 0;


// TIMER VARIABLES
let timeLeft = 60;
let timeInterval;
let timerEl = document.getElementById("timer");
const startButton = document.querySelector(".start-button");


// MAIN SCREEN VARIABLES
let mainHeading = document.querySelector(".main-header");
let mainParagraph = document.querySelector(".main-p");


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



// TIMER FUNCTION
startButton.addEventListener("click", countDown);

function countDown() {
    timeInterval = setInterval(function () {
       if ( timeLeft >= 0 ) {
        timerEl.textContent = `Time: ${timeLeft}`;
        timeLeft--;
       }
    }, 1000);
}


// CORRECT FUNCTION FOR IF USER PICKS CORRECT ANSWER
function correctAnswer() {
    score += 20;
    timeLeft += 12;

    msg.textContent = 'CORRECT!';
}

// WRONG FUNCTION FOR IF USER PICKS WRONG ANSWER
function wrongAnswer() {
    score -= 20;
    timeLeft -= 12;

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
        finished();
    })

    btnTwo = document.createElement("BUTTON");
    btnTwo.textContent = "2. Terminal / Bash";
    answerTwo.appendChild(btnTwo);
    btnTwo.addEventListener("click", function () { 
        wrongAnswer();
        finished();
    })

    btnThree = document.createElement("BUTTON");
    btnThree.textContent = "3. For Loops";
    answerThree.appendChild(btnThree);
    btnThree.addEventListener("click", function () { 
        wrongAnswer();
        finished();
    })

    btnFour = document.createElement("BUTTON");
    btnFour.textContent = "4. Console Log";
    answerFour.appendChild(btnFour);
    btnFour.addEventListener("click", function () { 
        correctAnswer();
        finished();
    })
}


// FINISHED FUNCTION FOR AFTER THE QUIZ
function finished() {
    question.remove();
    btnOne.remove();
    btnTwo.remove();
    btnThree.remove();
    btnFour.remove();
    msg.remove();
}