var userScoreEl = document.querySelector("#userScore");
var userInitEl = document.querySelector("#userInitials");
var submitBtnEl = document.querySelector("#submitButton");

var myUserScores = {};

userScoreEl.textContent = localStorage.getItem("currentUserScore");

var highScores = JSON.parse(localStorage.getItem("highScore")) || [];

submitBtnEl.addEventListener("click", function(event) {

    event.preventDefault();
    myUserScores = {
        userScore: localStorage.getItem("currentUserScore"),
        userInitials: userInitEl.value
    };
    
highScores.push(myUserScores);
highScores.sort((a, b) => b.userScore - a.userScore);
highScores.splice(5);

localStorage.setItem("highScore", JSON.stringify(highScores));
window.location.href="high-scores.html";
} )
