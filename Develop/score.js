
function printScores() {
  // JSON.parse exchanges information from web stoage to local storage
  // This checks for existing scores or setting score to 0 if there aren't any
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  highscores.forEach(function(score) {
    // Creates list of all scores saved to storage
      var liTag = document.createElement("li");
      liTag.textContent = score.name + " - " + score.score;
  
      // Shows all scores currently saved
      var ulEl = document.getElementById("highscores");
      ulEl.appendChild(liTag);
    });
  }
  
  // Clear function to rid of any saved scores
  function clearScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  // Click action for clear button
  document.getElementById("clear").onclick = clearScores;
  
  // Allows printScores function to run once page is reached
  printScores();

  // Click action for back button to main screen to try again
  back.addEventListener("click", function () {
      window.location.replace("./index.html");
  })

