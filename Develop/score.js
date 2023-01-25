function printScores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.name + " - " + score.score;
  
      var ulEl = document.getElementById("highscores");
      ulEl.appendChild(liTag);
    });
  }
  
  function clearScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearScores;
  
  printScores();

  back.addEventListener("click", function () {
      window.location.replace("./index.html");
  })

