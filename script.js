const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {
  // Hide intro, show main content
  intro.style.display = "none";
  main.classList.remove("hidden");

  // Start music at 0 volume
  music.volume = 0;
  music.play().catch(() => {
    console.log("Playback blocked");
  });

  // Fade-in effect
  let vol = 0;
  const targetVolume = 0.7;

  let fade = setInterval(() => {
    if (vol < targetVolume) {
      vol += 0.05;
      music.volume = vol;
    } else {
      music.volume = targetVolume;
      clearInterval(fade);
    }
  }, 200);
});

// Resume music if user switches tabs
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && music.paused) {
    music.play().catch(() => {});
  }
});

// Extra safety: restart if somehow stopped
music.addEventListener("ended", () => {
  music.currentTime = 0;
  music.play().catch(() => {});
});
