const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {
  intro.style.display = "none";
  main.classList.remove("hidden");

  // Play music (user-triggered = allowed)
  music.play().catch(() => {
    console.log("Autoplay blocked");
  });
});