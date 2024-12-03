const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const panel = document.querySelector(".time div");

let time = 0;
let active = false;
let idI;

const timer = () => {
  if (!active) {
    active = !active;
    startBtn.textContent = "Pause";
    idI = setInterval(start, 10);
  } else {
    active = !active;
    startBtn.textContent = "Start";
    clearInterval(idI);
  }
};

const start = () => {
  time++;
  panel.textContent = (time / 100).toFixed(2);
};

const reset = () => {
  time = 0;
  panel.textContent = "---";
  active = false;
  startBtn.textContent = "Start";
  clearInterval(idI);
};

startBtn.addEventListener("click", timer);
resetBtn.addEventListener("click", reset);
