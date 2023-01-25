
// Variables for questions, choices for question, and answer for question
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


// DOM Elements for Quiz

// variable for quiz
var quiz = document.querySelector("#quiz");
// variable for clock
var countdown = document.querySelector("#time");
// Questions
var quizChoices = document.querySelector("#choices");
// Start Button
var start = document.querySelector("#start");
// Submit Button
var submit = document.querySelector("#submit");
// Text Box for Name
var nameInput = document.querySelector("#name");
// Value of how many questions and draws what current question is
var questionIndex = 0;
// State of time and its length
// 10 seconds per question
var time = questions.length * 10;
// State of timer itself
var timer;

// Start Function
function startQuiz() {
  var homeStart = document.getElementById("home");
  // Hides starting page once start button is pressed
  homeStart.setAttribute("class", "next");

  // Brings up questions once previous page is hidden
  quiz.removeAttribute("class");
  // Starts clock at length of 10 seconds per question
  timer = setInterval(clock, 1000);
  countdown.textContent = time;

  // Links to Question function
  nextQuestion();
}

// Questions function
function nextQuestion() {
  // Created variable for the current question on screen
  // Pulls from value of question index
  var currentQuestion = questions[questionIndex];

  var titleQuestion = document.getElementById("questions");
  // Changes title to current question title from questions variable
  titleQuestion.textContent = currentQuestion.title;

  // Hides previous choices from other questions
  quizChoices.innerHTML = "";

  // Connects current questions with associated choices
  currentQuestion.choices.forEach(function(choice, i) {
    // The forEach() method calls a function for each element in an array
    // Establishes button interaction for each choice
    var choiceEl = document.createElement("button");
    choiceEl.setAttribute("class", "choice");
    choiceEl.setAttribute("value", choice);

    // Even listener for each choice
    // Click function for every available answer
    choiceEl.textContent = i + 1 + ". " + choice;
    choiceEl.onclick = questionChoice;
    // Displays choices on page
    quizChoices.appendChild(choiceEl);
  });
}

// User Choice Evaluation
function questionChoice() {
  // if statement for time deduction if wrong choice is selected
  if (this.value !== questions[questionIndex].answer) {
    time -= 15;

    // Prevents time from going below 0 if time deduction is more than current time
    if (time < 0) {
      time = 0;
    }
  }

  // Adds another question after choice is made from previous question
  // ++ is increment of 1
  questionIndex++;

  // if statement for end of questions
  // if the value of the length of questions (no questions left) equals the index (0) then the quiz ends
  if (questionIndex === questions.length) {
    endQuiz();
  } else {
    // if neither equal 0 then next question function is enabled
    nextQuestion();
  }
}

// End Function
function endQuiz() {
  // Stops clock
  clearInterval(timer);

  // Grabs input section once quiz is over for scores
  var input = document.getElementById("input");
  input.removeAttribute("class");

  // Shows highscore
  var finalScore = document.getElementById("score");
  // Score equals to time left in quiz
  // Tried to do point system but couldn't figure out how to add single points of value to questions and time alloted for each question simulatenously
  finalScore.textContent = time;

  // Hides questions and initializes input section
  quiz.setAttribute("class", "next");
}

// Clock function
function clock() {
  // Logs time and resets
  time--;
  countdown.textContent = time;

  // If time runs out then end quiz
  if (time <= 0) {
    endQuiz();
  }
}

// Scoring log function
function highscore() {
  // Name log for text box
  var name = nameInput.value.trim();

  // pulls up any previous scores logged into local storage
  // if no information is stored then shows nothing
  if (name !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Shows score with time value and name
    var newScore = {
    score: time,
    name: name
  };

  // Saves current score and name to local storage
  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));

  // Links to html for highscores
  window.location.href = "score.html";
}
}

// function for enter button for saving scores
// Was missing this for awhile. Had to get help from a friend. Not sure why there needs to be a separate function for enter and for logging highscore
function enter(event) {
  if (event.key === "Enter") {
    highscore();
  }
}

// Click action for highscore button (top left start screen)
// brings to highscores and shows local storage
submit.onclick = highscore;

// Click action for start button
start.onclick = startQuiz;

// The onkeyup event occurs when the user releases a key on the keyboard
// Once enter key is released then the enter action is completed for buttons
nameInput.onkeyup = enter;

// Attempted to add score.js to end of this quiz.js but could nt figure out how to get it to not interfere with highscore function and the highscore onclick
// I would constantly get TypeError: Cannot set properties of null (setting 'onclick') in inspection