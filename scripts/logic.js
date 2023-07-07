var quizQuestion= document.querySelector(".quiz-question");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizAnswer = document.querySelector(".quiz-answers");
var title = document.querySelector(".title");
var subtitle = document.querySelector(".subtitle");
var message = document.querySelector(".message");
var timer;
var timerCount;
var i = 0;


 //write response and time remaining value to highscortes
function startQuiz(){
//on press of start, call start timer and call getQuestion to display first question
startButton.style.display = "none"
title.style.display = "none"
subtitle.style.display = "none"
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  getQuestion()
  startTimer()
}

function startTimer(){
    // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

function getQuestion(){
    //pull next question from questions array and then check if user choice is correct

  document.querySelector(".quiz-question").innerHTML = questions[i].question 
  document.querySelector(".a1").innerHTML ="1. " + questions[i].a1
  document.querySelector(".a2").innerHTML = "2. " + questions[i].a2
  document.querySelector(".a3").innerHTML = "3. " + questions[i].a3
  document.querySelector(".a4").innerHTML = "4. " + questions[i].a4  
}

function checkCorrect(){
    // if choice matches correct answer display correct then call next question
  quizAnswer.addEventListener("click", function(event) {
      var userChoice = event.target;
      userAnswer = userChoice.getAttribute("class")
      console.log(userAnswer);
      if (questions[i].correctAnswer === userAnswer) {
          message.textContent = "CORRECT!"
      }
      else{
          wrong()
      }
      i++
      if(i === questions.length){
        gameOver();
      }
      else{
        getQuestion();
      }
  }); 
}
  
function wrong(){
// deduct time from timer
  if(timerCount <= 10){
    timerCount = 0
  }
  else{
  timerCount = timerCount -  10;
  message.textContent = "WRONG!";
  }
}
startButton.addEventListener("click", startQuiz);
checkCorrect();