var quizQuestion= document.querySelector(".quiz-question");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizAnswer = document.querySelector(".quiz-answers");
var title = document.querySelector(".title");
var subtitle = document.querySelector(".subtitle");
var message = document.querySelector(".message");
var gameWindow = document.querySelector("#game-window");

var gameOverMessage = document.querySelector(".gameOverMessage")
var hideForm = document.getElementById("hide-form")
var scores = [];
var initialInput = document.querySelector("#initial-text");
var scoreForm = document.querySelector("#score-form");
var highScoreList = document.querySelector("#high-score-list");
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
    var a1 = document.createElement("button");
    a1.setAttribute("class", "a1");
    quizAnswer.appendChild(a1);
    var a2 = document.createElement("button");
    a2.setAttribute("class", "a2");
    quizAnswer.appendChild(a2);
    var a3 = document.createElement("button");
    a3.setAttribute("class", "a3");
    quizAnswer.appendChild(a3);
    var a4 = document.createElement("button");
    a4.setAttribute("class", "a4");
    quizAnswer.appendChild(a4);
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

function renderScores() {
  highScoreList.innerHTML = "";
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);
    highScoreList.appendChild(li);
  }
}
function init() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  if (storedScores !== null) {
    scores = storedScores;
  }
  renderScores();
}




function gameOver(){
    
    //stop the question function log score - read interval value and request initisald from user
    
    console.log("heyyy")
    
    //gameOverMessage.textContent = "That's all!";
    gameWindow.classList.add("hidden");
    hideForm.classList.add("show");
    
   // gameOverMessage = document.createElement("h4");
    //quizQuestion.appendChild(gameOverMessage);
    //gameOverMessage.textContent = "Your score is: " + timerCount;
    //clearInterval(timer);

 //write response and time remaining value to highscortes
    
 // ask if you want to play again
 
}
startButton.addEventListener("click", startQuiz);
checkCorrect();