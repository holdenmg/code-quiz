var quizQuestion= document.querySelector(".quiz-question");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoresButton = document.querySelector(".scores-button");
var backButton = document.querySelector(".back-button")
var clearButton = document.querySelector(".clear-button")
var quizAnswer = document.querySelector(".quiz-answers");
var title = document.querySelector(".title");
var subtitle = document.querySelector(".subtitle");
var message = document.querySelector(".message");
var gameWindow = document.querySelector("#game-window");
var gameOverMessage = document.querySelector(".gameOverMessage")
var hideForm = document.getElementById("hide-form")
var scores = [];
var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreSection = document.querySelector("#scores");
var highScoreList = document.querySelector("#high-score-list");
var timer;
var timerCount;
var i = 0;


 
function startQuiz(){
//on press of start, call start timer and call getQuestion to display first question
startButton.style.display = "none"
title.style.display = "none"
subtitle.style.display = "none"
timerElement.classList.remove("hidden")
scoresButton.classList.add("hidden")
  timerCount = 60;
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
      timerCount == 0;
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

function getQuestion(){
    //pull next question from questions array 
    
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

function gameOver(){
  //hide game window and display score input form
  playerScore = timerCount;
  clearInterval(timer);
  gameWindow.classList.add("hidden");
   hideForm.classList.add("show");
   timerElement.classList.add("hidden")
   scoresButton.classList.add("hidden");
}


//--------------score inputing and storing------------//
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
  scoreSection.classList.remove("hidden");
  gameWindow.classList.add("hidden");
  backButton.classList.remove("hidden");
  scoresButton.classList.add("hidden");
  timerElement.classList.add("hidden")
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  if (storedScores !== null) {
    scores = storedScores;
  }
  renderScores();
}

function storeScores() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("scores", JSON.stringify(scores));
}

scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var scoreText = scoreInput.value.trim() + " Score: " + playerScore;
  scores.push(scoreText);
  scoreInput.value = ""
  storeScores();
  renderScores();
  hideForm.classList.remove("show");
  init();
});

function back(){
  scoreSection.classList.add("hidden");
  gameWindow.classList.remove("hidden");
  backButton.classList.add("hidden");
  scoresButton.classList.remove("hidden");
  timerElement.classList.remove("hidden")
  location.reload();

}

function clearScores(){
  while( highScoreList.firstChild ){
    highScoreList.removeChild( highScoreList.firstChild );
    scores = [];
    storeScores();
  }
}


//------------ start-----------------------//
startButton.addEventListener("click", startQuiz);
checkCorrect();
scoresButton.addEventListener("click", init);
clearButton.addEventListener("click", clearScores)
backButton.addEventListener("click", back);