var questions = [
  {
    title:
    choices: []
    answer:
  },

var quiz = document.querySelector("#quiz");
var countdown = document.querySelector("#time");
var choices = document.querySelector("#choices");
var start = document.querySelector("#start");

// quiz state variables
var questionIndex = 0;
var time = questions.length * 15;
var timer;

function startQuiz() {
  var homeStart = document.getElementById("home");
  homeStart.setAttribute("class", "next");

  quiz.removeAttribute("class");

  timer = setInterval(clock, 1000);

  countdown.textContent = time;

  nextQuestion();
}

function nextQuestion() {
  var currentQuestion = questions[questionIndex];

  var titleQuestion = document.getElementById("questions");
  titleQuestion.textContent = currentQuestion.title;

  choices.innerHTML = "";

  currentQuestion.choices.forEach(function(choice, i)) {
    var choiceEl = document.createElement("button");
    choiceEl.setAttribute("class", "choice");
    choiceEl.setAtrribute("value", choice);

    choiceEl.textContent = i + 1 + ". " + choice;

    choiceEl.onclick = questionChoice;

    choices.appendChild(choiceEl);
  }
}


function questionChoice() {
  if (this.value !== questions[questionsIndex].answer) {

    time -= 15;

    if (time < 0) {
      time = 0;
    }
  }

  questionIndex++;

  if (questionIndex === questions.length) {
    quizEnd();
  } else {
    nextQuestion
  }


}

function endQuiz() {

}

function clock() {

}

function highscore() {

}


