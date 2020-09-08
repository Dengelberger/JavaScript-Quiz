var highScores = JSON.parse(localStorage.getItem("highScore")) || [];

var highScoreTableEl = document.querySelector("#highScoreTable");

var tableContents = "";

for(var i = 0; i < highScores.length; i++) {

    tableContents = tableContents.concat("<li>" + highScores[i].userInitials + " : " + highScores[i].userScore + "</li>");


}

highScoreTableEl.innerHTML=tableContents;

