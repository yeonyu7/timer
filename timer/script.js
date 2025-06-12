let focusTime = 25 * 60;
let breakTime = 5 * 60;
let timeLeft = focusTime;
let timer;
let isFocus = true;

function updateDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${minutes}:${seconds}`;
  document.getElementById("mode").textContent = `MODE: ${isFocus ? "집중" : "휴식시간"}`;
}

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      isFocus = !isFocus;
      timeLeft = isFocus ? focusTime : breakTime;
      updateDisplay();
      alert(isFocus ? "다시 공부해라" : "머리 식힐 시간");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = isFocus ? focusTime : breakTime;
  updateDisplay();
}

window.onload = updateDisplay;