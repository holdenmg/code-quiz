

 //write response and time remaining value to highscortes
function startQuiz(){
//on press of start, call start timer and call nextQuestion to display first question



}

function startTimer() {
    // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}
function nextQuestion(){
    //pull next question from questions array

}


function correct(){
    //call next question

}


function wrong(){
// deduct time from timer
//call next question

}

function gameOver(){

    //stop the question function log score - read interval value and request initisald from user

 //write response and time remaining value to highscortes

 // ask if you want to play again
}