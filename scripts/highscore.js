var gameOverMessage = document.querySelector(".gameOverMessage")
var hideForm = document.getElementById("hide-form")
var highScores = [];

function gameOver(){
    window.location.href = "highscores.html";
    //stop the question function log score - read interval value and request initisald from user
    
    console.log("heyyy")
    
    gameOverMessage.textContent = "That's all!";
    hideForm.classList.add("show");
   // gameOverMessage = document.createElement("h4");
    //quizQuestion.appendChild(gameOverMessage);
    //gameOverMessage.textContent = "Your score is: " + timerCount;
    //clearInterval(timer);

 //write response and time remaining value to highscortes
    
 // ask if you want to play again
 
}