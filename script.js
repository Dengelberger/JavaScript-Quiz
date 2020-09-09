//ARRAY OF OBJECTS FOR QUESTIONS, CHOICES, AND CORRECT ANSWERS.

var myJavaQuizQuestions = [
    {
        questionText: "The purpose of JavaScript is to..",
        answerA: "format the style of the web page.",
        answerB: "run the functions and activities.",
        answerC: "provide the framework for the web page.",
        answerD: "drive coders crazy so they find other work.",
        correctAnswer: "B",
    },
    {
        questionText: "Which of these will let the program know if a button is clicked by a user?",
        answerA: "an Event Listener",
        answerB: "a loop statement",
        answerC: "a counter",
        answerD: "a console.log statement",
        correctAnswer: "A",
    },
    {
        questionText: "What does an array do?",
        answerA: "runs a function when it is called for",
        answerB: "formats html for font styling",
        answerC: "store a list of elements such as strings or values",
        answerD: "end all programs that are running",
        correctAnswer: "C",
    },
    {
        questionText: "Which of the following can be used to separate a block of data into smaller elements?",
        answerA: "JSON.stringify()",
        answerB: "JSON.parse()",
        answerC: "getElementById",
        answerD: "concatenate",
        correctAnswer: "B",
    },
    {
        questionText: "Where can you include javascript code?",
        answerA: "only on the displayed web page",
        answerB: "in a .js file",
        answerC: "in the .html file",
        answerD: "both B and C",
        correctAnswer: "D",
    },
    {
        questionText: "Why is it important for coders to learn JavaScript?",
        answerA: "It is a commonly used programming language.",
        answerB: "It is the only programming language available.",
        answerC: "It isn't important for coders to learn JavaScript.",
        answerD: "Because it makes Baxter, the German Shepherd, a happy dog!",
        correctAnswer: "A",
    }
];

// START QUIZ BUTTON
var secondsLeft = 90;
var questionIndex = 0;
var startEl = document.querySelector("#startBtn");    
var welcomeEL = document.querySelector(".welcomePage");
var timeDispEl = document.querySelector("#time");
var highScoreNavEl = document.querySelector("#highScoresNav")
var revealEl = document.querySelector("#reveal");

startEl.addEventListener("click", function(event) {
    event.preventDefault();
    setTime();
    var questionBox = document.getElementById("questionBox");       

    // THIS PART IS TO HIDE THE WELCOME ON THE BEGINNING ONCE THE START BUTTON IS CLICKED.
    if (welcomeEL.style.display = "block") {
        welcomeEL.style.display = "none";
    }
    if (highScoreNavEl.style.display = "block") {
        highScoreNavEl.style.display = "none";
    }

 //THIS PART IS TO BRING THE QUESTION BOX FROM HIDING.

        questionBox.style.display = "block";
        timeDispEl.style.display = "block";
        newQuestion();
    }
)
//EVENT LISTENER FOR EACH QUESTION.

questionBox.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        if(event.target.textContent == myJavaQuizQuestions[questionIndex].correctAnswer) {
            revealEl.style.display = "block";
            revealEl.textContent = "Correct !"
            questionIndex++;
            correctAnswerTally++;
            newQuestion();
        } else {
            revealEl.style.display = "block";
            revealEl.textContent = "Wrong !"
            questionIndex++;
            newQuestion();
            secondsLeft = secondsLeft - 10;

        }
    }
});



var correctAnswerTally = 0;

var currentQuestion = document.getElementById("questionText")
var currentAnswerA = document.getElementById("answerAText")
var currentAnswerB = document.getElementById("answerBText")
var currentAnswerC = document.getElementById("answerCText")
var currentAnswerD = document.getElementById("answerDText")

function newQuestion() {

    revealEl.style.display = "none";
    currentQuestion.textContent = myJavaQuizQuestions[questionIndex].questionText;
    currentAnswerA.textContent = myJavaQuizQuestions[questionIndex].answerA;
    currentAnswerB.textContent = myJavaQuizQuestions[questionIndex].answerB;
    currentAnswerC.textContent = myJavaQuizQuestions[questionIndex].answerC;
    currentAnswerD.textContent = myJavaQuizQuestions[questionIndex].answerD;
  
} 

//TIMER AREA

var timerEl = document.querySelector("#timer");



function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft === 0 || myJavaQuizQuestions.length === questionIndex) {
        clearInterval(timerInterval);
        
      localStorage.setItem("currentUserScore", secondsLeft);
      window.location.href="submit.html";
      }
    }, 1000);
  };


//RECORD THE REMAINING TIME IN THE SCORE AREA.  POSSIBLY MULTIPLY IT BY THE NUMBER OF CORRECT ANSWERS, OR CORRECT ANSWER TALLY.

//ALLOW PLAYER TO ENTER INITIALS AND RECORD THAT ON THE HIGH SCORES PAGE NEXT TO THE SCORE