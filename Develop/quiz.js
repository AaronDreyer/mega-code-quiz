var questions = [
  {
    title: "Which of the following methods is used to access HTML elements using Javascript?",
    choices: ["getElementById()", "getElementsByClassName()", "Both A and B", "None of the above"],
    answer: "Both A and B"
  },
  {
    title: "Which of the following methods can be used to display data in some form using Javascript?",
    choices: ["document.write()", "console.log()", "window.alert()", "All of the above"],
    answer: "All of the above"
  },
  {
    title: "How can a datatype be declared to be a constant type?",
    choices: ["const", "var", "let", "constant"],
    answer: "const"
  },
  {
    title: "Javascript is an _______ language?",
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented"
  },
  {
    title: "The 'function' and 'var' are known as:",
    choices: ["Keywords", "Data Types", "Declaration Statements", "Prototypes"],
    answer: "Declaration Statements"
  },
  {
    title: "Arrays in JavaScript are defined by which of the following statements?",
    choices: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions"],
    answer: "It is an ordered list of values"
  },
  {
    title: "What is JavaScript?",
    choices: ["JavaScript is a scripting language used to make the website interactive", "JavaScript is an assembly language used to make the website interactive", "JavaScript is a compiled language used to make the website interactive", "None of the above"],
    answer: "JavaScript is a scripting language used to make the website interactive"
  },
  {
    title: "Which of the following is not javascript data types?",
    choices: ["Null Type", "Undefined Type", "Number Type", "All of the above"],
    answer: "All of the above"
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
  var name = nameInput.value.trim();

  if (name !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
    score: time,
    name: name
  };

  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));

  window.location.href = "score.html";
}
}

function enter(event) {
  if (event.key === "Enter") {
    highscore();
  }
}

submit.onclick = highscore;

start.onclick = startQuiz;

nameInput.onkeyup = enter;


