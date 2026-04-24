const enterBtn = document.getElementById('enterBtn');
const intro = document.getElementById('intro');
const main = document.getElementById('mainContent');
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

enterBtn.addEventListener('click', () => {
  intro.style.display = 'none';
  main.classList.remove('hidden');

  music.volume = 0.35;
  music.play().catch(error => {
    console.log('Audio playback blocked:', error);
  });
});

musicToggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = '🔊 Music On';
  } else {
    music.pause();
    musicToggle.textContent = '🔇 Music Off';
  }
});
