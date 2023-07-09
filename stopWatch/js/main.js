
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// let years = Math.round(Date.now() / year);
// console.log(years)
console.log(Date.now())
const timerEl = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function startTimer(){
// console.log("start");
startTime = Date.now() - elapsedTime;
console.log("start time is " + startTime);
timerInterval = setInterval(()=>{
  elapsedTime = Date.now() - startTime;
console.log("elapsed time is " + elapsedTime);
  timerEl.textContent = formatTime(elapsedTime);
},10)

startButton.disabled = true;
stopButton.disabled = false;
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)));
    return (
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      "." +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      "." +
      (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
      "." +
      (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}
function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}
function resetTimer() {
//   console.log("start");
elapsedTime=0;
timerEl.textContent="00:00:00"
}

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);