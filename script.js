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

var startEl = document.querySelector("#startBtn");    
var welcomeEL = document.querySelector(".welcomePage");

startEl.addEventListener("click", function() {
    var questionBox = document.getElementById("questionBox");       

    // THIS PART IS TO HIDE THE WELCOME ON THE BEGINNING ONCE THE START BUTTON IS CLICKED.
    if (welcomeEL.style.display = "block") {
        welcomeEL.style.display = "none";
    }
 //THIS PART IS TO BRING BACK THE QUESTION FROM HIDING.

        questionBox.style.display = "block";
    }
)

//RENDERING OF EACH QUESTION. RIGHT NOW, THE QUESTION INDEX NEEDS TO BE MANUALLY CHANGED. THIS NEEDS TO BE FIXED.

var questionIndex = 0;

var correctAnswerTally = 0;

//for (var questionIndex.Value < myJavaQuizQuestions.length) {

    var currentQuestion = myJavaQuizQuestions[questionIndex].questionText;
    var currentAnswerA = myJavaQuizQuestions[questionIndex].answerA;
    var currentAnswerB = myJavaQuizQuestions[questionIndex].answerB;
    var currentAnswerC = myJavaQuizQuestions[questionIndex].answerC;
    var currentAnswerD = myJavaQuizQuestions[questionIndex].answerD;

    document.getElementById("questionText").innerHTML = currentQuestion;
    document.getElementById("answerAText").innerHTML = currentAnswerA;
    document.getElementById("answerBText").innerHTML = currentAnswerB;
    document.getElementById("answerCText").innerHTML = currentAnswerC;
    document.getElementById("answerDText").innerHTML = currentAnswerD;

//} //else { //THIS STOPS THE QUIZ AND TAKES THE USER TO THE SCORE AREA.

   //         quizOver();
// }

//check answer function

    // IF ONE OF THE CHOICES IS CLICKED, 

//if(answerAClicked || answerBClicked || answerCClicked || answerDClicked) {
    
    // COMPARE THE CLICKED CHOICE TO THE CORRECT ANSWER.

    //var correctAnswerEl = myJavaQuizQuestions[questionIndex].correctAnswer;

        //IF CURRENTANSWERA IS CLICKED, THEN IS CORRECTANSWEREL = "A"? IF SO, CORRECT! IF NOT, WRONG!

        //  if(answerAClicked) {
//     if(myJavaQuizQuestions[currentQuestion][answerAClicked.id] === myJavaQuizQuestions[currentQuestion].correctAnswer) {
//         //correct answer function
//     } else {
//         //wrong answer function, including taking time off timer.
//     }
// }

        //IF CURRENTANSWERB IS CLICKED, THEN IS CORRECTANSWEREL = "B"? IF SO, CORRECT! IF NOT, WRONG!

        //IF CURRENTANSWERC IS CLICKED, THEN IS CORRECTANSWEREL = "C"? IF SO, CORRECT! IF NOT, WRONG!

        //IF CURRENTANSWERD IS CLICKED, THEN IS CORRECTANSWEREL = "D"? IF SO, CORRECT! IF NOT, WRONG!

    
    // IF THE CLICKED CHOICE MATCHES THE CORRECT ANSWER, RETURN "CORRECT!", ADD ONE TO THE CORRECT ANSWER TALLY, THEN ADD ONE TO THE QUESTION INDEX, AND RETURN TO THE TOP OF THE LOOP.

    // IF THE CLICKED CHOICE DOES NOT MATCH THE CORRECT ANSWER, RETURN "WRONG! YOU LOST 10 SECONDS OF THE REMAINING TIME.", DEDUCT 10 SECONDS FROM THE TIMER, ADD ONE TO THE QUESTION INDEX, AND RETURN TO THE TOP OF THE LOOP.

    //IF THE QUESTION INDEX GOES PAST THE ARRAY LENGTH, THE GAME IS OVER. 

//TIMER AREA

// GAME OVER AREA

// QUIZ OVER FUNCTION

//RECORD THE REMAINING TIME IN THE SCORE AREA.  POSSIBLY MULTIPLY IT BY THE NUMBER OF CORRECT ANSWERS, OR CORRECT ANSWER TALLY.

//ALLOW PLAYER TO ENTER INITIALS AND RECORD THAT ON THE HIGH SCORES PAGE NEXT TO THE SCORE