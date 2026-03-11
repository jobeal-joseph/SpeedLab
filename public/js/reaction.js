document.addEventListener('DOMContentLoaded', function () {
  const box = document.getElementById('reaction-box');
  const messageEl = document.getElementById('reaction-message');
  const startBtn = document.getElementById('start-reaction-btn');
  const retryBtn = document.getElementById('retry-reaction-btn');
  const reactionTimeEl = document.getElementById('reaction-time-value');

  let timeoutId = null;
  let isWaiting = false;
  let isReady = false;
  let greenTime = null;

  function resetState() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    isWaiting = false;
    isReady = false;
    greenTime = null;
    box.classList.remove('ready');
    box.textContent = 'Wait...';
    box.style.backgroundColor = '';
    box.style.cursor = 'not-allowed';
    messageEl.textContent = 'Click "Start" and then wait for the box to turn green.';
  }

  function startTest() {
    resetState();
    isWaiting = true;
    messageEl.textContent = 'Get ready... the box will turn green soon.';

    const delay = 2000 + Math.random() * 3000; // 2–5 seconds
    timeoutId = setTimeout(() => {
      isWaiting = false;
      isReady = true;
      greenTime = new Date().getTime();
      box.classList.add('ready');
      box.textContent = 'Click!';
      box.style.cursor = 'pointer';
      messageEl.textContent = 'Click the box now!';
    }, delay);
  }

  box.addEventListener('click', function () {
    // Clicked too early
    if (isWaiting && !isReady) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      isWaiting = false;
      isReady = false;
      box.classList.remove('ready');
      box.textContent = 'Too soon!';
      box.style.backgroundColor = '#f97316';
      box.style.cursor = 'not-allowed';
      messageEl.textContent = 'Too early! Click "Try Again" to restart.';
      return;
    }

    // Valid reaction
    if (isReady && greenTime) {
      const clickTime = new Date().getTime();
      const reactionMs = clickTime - greenTime;
      reactionTimeEl.textContent = reactionMs.toString();
      messageEl.textContent = 'Nice! Your reaction time is shown below.';

      isReady = false;
      box.classList.remove('ready');
      box.textContent = 'Done';
      box.style.cursor = 'default';
    }
  });

  startBtn.addEventListener('click', startTest);
  retryBtn.addEventListener('click', startTest);

  resetState();
});

