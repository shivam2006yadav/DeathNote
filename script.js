const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {
  intro.style.display = "none";
  main.classList.remove("hidden");

  music.volume = 0.7;

  // Start music
  music.play();

  // Ensure it keeps playing even if interrupted
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && music.paused) {
      music.play();
    }
  });

  // Extra fallback loop enforcement
  music.addEventListener("ended", () => {
    music.currentTime = 0;
    music.play();
  });
});
