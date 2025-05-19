$(document).ready(function () {
  let score = 0;
  let time = 10;
  let timerInterval, spawnInterval;

  function spawnBug() {
    const bug = $('<div class="bug"></div>');
    const maxX = $("#gameArea").width() - 30;
    const maxY = $("#gameArea").height() - 30;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    bug.css({ top: y + "px", left: x + "px" });

    bug.on("click", function () {
      score++;
      $("#score").text(score);
      $(this).remove();
    });

    $("#gameArea").append(bug);

    setTimeout(() => bug.remove(), 1500);
  }

  function startGame() {
    $("#score").text("0");
    $("#timer").text("10");
    score = 0;
    time = 10;

    timerInterval = setInterval(() => {
      time--;
      $("#timer").text(time);
      if (time <= 0) {
        clearInterval(timerInterval);
        clearInterval(spawnInterval);
        $(".bug").remove();
        $("#finalScoreText").text("Final Score : " + score);
        $("#gameOverScreen").show();
      }
    }, 1000);

    spawnInterval = setInterval(spawnBug, 500);
  }

  startGame();
});