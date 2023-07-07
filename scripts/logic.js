var quizQuestion= document.querySelector(".quiz-question");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var timer;
var timerCount;
i = 0

 //write response and time remaining value to highscortes
function startQuiz(){
//on press of start, call start timer and call getQuestion to display first question

  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  getQuestion()
  startTimer()
}


function startTimer() {
    // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      gameOver();
    }
  }, 6000);
}
function getQuestion(){
    //pull next question from questions array and then check if user choice is correct
    document.querySelector(".quiz-question").innerHTML = questions[i].question 
    document.querySelector(".a1").innerHTML = answers[i].a1
    document.querySelector(".a2").innerHTML = answers[i].a2
    document.querySelector(".a3").innerHTML = answers[i].a3
    document.querySelector(".a4").innerHTML = answers[i].a4
    
  checkCorrect()
}


function checkCorrect(){
    // if choice matches correct answer display correct then call next question
    if (answers[i] === userChoice) {
      quizQuestion.textContent = "CORRECT!"
      i++;
      getQuestion()
    }
    else {
      wrong()
      i++;
      getQuestion()
    }
}


function wrong(){
// deduct time from timer
timerCount = timerCount -  10;
quizQuestion.textContent = "WRONG!";


}

function gameOver(){

    //stop the question function log score - read interval value and request initisald from user

 //write response and time remaining value to highscortes

 // ask if you want to play again
}

startButton.addEventListener("click", startQuiz);