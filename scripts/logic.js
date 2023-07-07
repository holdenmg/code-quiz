var quizQuestion= document.querySelector(".quiz-question");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizAnswer = document.querySelector(".quiz-answers");
var timer;
var timerCount;
var i = 0;
var highScores = [];

 //write response and time remaining value to highscortes
function startQuiz(){
//on press of start, call start timer and call getQuestion to display first question

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
    console.log("xxxxxxxxxxxxxxxxxxxxxxx");
    
    
}



function checkCorrect(){
    // if choice matches correct answer display correct then call next question
    quizAnswer.addEventListener("click", function(event) {
      var userChoice = event.target;
      userAnswer = userChoice.getAttribute("class")
      console.log(userAnswer);
      if (questions[i].correctAnswer === userAnswer) {
          quizQuestion.textContent = "CORRECT!"
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
timerCount = timerCount -  10;
quizQuestion.textContent = "WRONG!";


}

function gameOver(){

    //stop the question function log score - read interval value and request initisald from user
    quizQuestion.textContent = "That's all!";
    gameOverMessage = document.createElement("h4");
    quizQuestion.appendChild(gameOverMessage);
    gameOverMessage.textContent = "Your score is: " + timerCount;
    clearInterval(timer);

 //write response and time remaining value to highscortes
    
 // ask if you want to play again
}

startButton.addEventListener("click", startQuiz);
checkCorrect();