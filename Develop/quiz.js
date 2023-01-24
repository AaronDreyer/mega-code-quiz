var questions = [
  {
    title: "What day is it?",
    choices: ["1", "2", "3", "4"],
    answer: "1"
  },
  {
    title: "Test Question?",
    choices: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    title: "Test Question?",
    choices: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    title: "Test Question?",
    choices: ["1", "2", "3", "4"],
    answer: "4"
  },
  {
    title: "Test Question?",
    choices: ["1", "2", "3", "4"],
    answer: "1"
  },
  {
    title: "Test Question?",
    choices: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    title: "Test Question?",
    choices: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    title: "Test Question?",
    choices: ["1", "2", "3", "4"],
    answer: "4"
  },
];

var quiz = document.querySelector("#quiz");
var countdown = document.querySelector("#time");
var quizChoices = document.querySelector("#choices");
var start = document.querySelector("#start");
var submit = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var questionIndex = 0;
var time = questions.length * 10;
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

  quizChoices.innerHTML = "";

  currentQuestion.choices.forEach(function(choice, i) {
    var choiceEl = document.createElement("button");
    choiceEl.setAttribute("class", "choice");
    choiceEl.setAttribute("value", choice);

    choiceEl.textContent = i + 1 + ". " + choice;
    choiceEl.onclick = questionChoice;
    quizChoices.appendChild(choiceEl);
  });
}

function questionChoice() {
  if (this.value !== questions[questionIndex].answer) {
    time -= 15;

    if (time < 0) {
      time = 0;
    }
  }

  questionIndex++;

  if (questionIndex === questions.length) {
    endQuiz();
  } else {
    nextQuestion();
  }
}

function endQuiz() {
  clearInterval(timer);

  var input = document.getElementById("input");
  input.removeAttribute("class");

  var finalScore = document.getElementById("score");
  finalScore.textContent = time;

  quiz.setAttribute("class", "next");
}

function clock() {
  time--;
  countdown.textContent = time;

  if (time <= 0) {
    endQuiz();
  }
}

function highscore() {
  
}
}

function enter(event) {
  
}

submit.onclick = highscore;

start.onclick = startQuiz;

nameInput.onkeyup = enter;


