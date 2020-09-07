//arrays for questions and answer choices as well as correct answers.

var myJavaQuizQuestions = [
    {
    questionText : "The purpose of JavaScript is to..",
    answerA : "format the style of the web page.",
    answerB : "run the functions and activities.",
    answerC : "provide the framework for the web page.",
    answerD : "drive coders crazy so they find other work.",
    correctAnswer: "B",
},
{
    questionText : "Which of these will let the program know if a button is clicked by a user?",
    answerA : "an Event Listener",
    answerB : "a loop statement",
    answerC : "a counter",
    answerD : "a console.log statement",
    correctAnswer: "A",
},
{
    questionText : "What does an array do?",
    answerA : "runs a function when it is called for",
    answerB : "formats html for font styling",
    answerC : "store a list of elements such as strings or values",
    answerD : "end all programs that are running",
    correctAnswer: "C",
},
{
    questionText : "Which of the following can be used to separate a block of data into smaller elements?",
    answerA : "JSON.stringify()",
    answerB : "JSON.parse()",
    answerC : "getElementById",
    answerD : "concatenate",
    correctAnswer: "B",
},
{
    questionText : "Where can you include javascript code?",
    answerA : "only on the displayed web page",
    answerB : "in a .js file",
    answerC : "in the .html file",
    answerD : "both B and C",
    correctAnswer: "D",
},
{
    questionText : "Why is it important for coders to learn JavaScript?",
    answerA : "It is a commonly used programming language.",
    answerB : "It is the only programming language available.",
    answerC : "It isn't important for coders to learn JavaScript.",
    answerD : "Because it makes Baxter, the German Shepherd, a happy dog!",
    correctAnswer: "A",
}
];

// start quiz button

var startQuizEl = document.getElementById("start");

startQuizEl.addEventListener("click", showQuiz());

//loop for rendering each question.

//must first hide the welcome information.

function showQuiz () {

    var questionIndex = 1;

for(var i = 0; i < myJavaQuizQuestions.length; i++) {

    var currentQuestion = myJavaQuizQuestions[questionIndex].questionText;
    var currentAnswers = myJavaQuizQuestions[questionIndex].answers;
}
//     if currentQuestion > 10, {
//         currentQuestion++;
//         displayQuestion();
//     } else {
//         quizOver();
// }

// //display question function

// function displayQuestion () {

//  }

// }
// // //check answer function

// if(answerBClicked) {
//     if(myJavaQuizQuestions[currentQuestion][answerBClicked.id] === myJavaQuizQuestions[currentQuestion].correctAnswer) {
//         //correct answer function
//     } else {
//         //wrong answer function, including taking time off timer.
//     }

// }


// // //timer area.

// // //high score area.