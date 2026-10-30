const audio = new Audio('water.mp3');
audio.playbackRate = 0.5;

function getRandomTimeout(min초, max초) {
  const minMs = min초 * 1000;
  const maxMs = max초 * 1000;

  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
}

function startRandomLoop() {
  const delay = getRandomTimeout(1, 5);

  console.log(`${(delay / 1000).toFixed(2)}초 후에 실행됩니다.`);

  setTimeout(() => {
    audio.currentTime = 0;
    audio.play();
  }, delay);
}

audio.addEventListener('ended', startRandomLoop);

audio.play();
