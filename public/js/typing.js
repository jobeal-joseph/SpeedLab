document.addEventListener('DOMContentLoaded', function () {
  const paragraphEl = document.getElementById('test-paragraph');
  const inputEl = document.getElementById('typing-input');
  const finishBtn = document.getElementById('finish-btn');
  const restartBtn = document.getElementById('restart-btn');

  const wpmEl = document.getElementById('wpm-value');
  const accuracyEl = document.getElementById('accuracy-value');
  const timeEl = document.getElementById('time-value');

  const originalText = paragraphEl ? paragraphEl.textContent || '' : '';
  let startTime = null;
  let isFinished = false;

  function calculateResults() {
    if (isFinished) return;

    const typedText = inputEl.value;
    if (!typedText.length) {
      wpmEl.textContent = '0';
      accuracyEl.textContent = '0';
      timeEl.textContent = '0';
      isFinished = true;
      return;
    }

    const endTime = new Date().getTime();
    const elapsedMs = startTime ? endTime - startTime : 0;
    const elapsedMinutes = elapsedMs > 0 ? elapsedMs / 60000 : 1 / 60000;

    const totalTyped = typedText.length;
    let correctChars = 0;

    for (let i = 0; i < totalTyped && i < originalText.length; i++) {
      if (typedText[i] === originalText[i]) {
        correctChars++;
      }
    }

    const grossWpm = (totalTyped / 5) / elapsedMinutes;
    const accuracy = totalTyped > 0 ? (correctChars / totalTyped) * 100 : 0;

    wpmEl.textContent = Math.max(0, Math.round(grossWpm)).toString();
    accuracyEl.textContent = accuracy.toFixed(1);
    timeEl.textContent = (elapsedMs / 1000).toFixed(2);

    isFinished = true;
  }

  inputEl.addEventListener('input', function () {
    if (!startTime && inputEl.value.length > 0) {
      startTime = new Date().getTime();
    }

    if (!isFinished && inputEl.value.length >= originalText.length) {
      calculateResults();
    }
  });

  finishBtn.addEventListener('click', function () {
    if (!startTime && inputEl.value.length > 0) {
      startTime = new Date().getTime();
    }
    calculateResults();
  });

  restartBtn.addEventListener('click', function () {
    window.location.reload();
  });
});

