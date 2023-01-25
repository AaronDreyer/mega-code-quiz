function printhighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b) {
      return score;
    });
  
    highscores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.name + " - " + score;
    
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
      });
    }
    
    function clearhighscores() {
      window.localStorage.removeItem("highscores");
      window.location.reload();
    }
    
    document.getElementById("clear").onclick = clearhighscores;
    
    printhighscores();
  
    back.addEventListener("click", function () {
        window.location.replace(".index.html");
    })
