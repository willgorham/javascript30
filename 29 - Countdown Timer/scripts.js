let countdown;
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);

  const start = Date.now();
  const end = start + (1000 * seconds);
  displayTimeLeft(seconds);

  countdown = setInterval(function() {
    const secondsLeft = Math.round((end - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);

  displayEndTime(end);
}

function displayTimeLeft(seconds) {
  const hoursLeft = Math.floor(seconds / 3600);
  const minutesLeft = Math.floor((seconds - (hoursLeft * 3600)) / 60);
  const secondsLeft = seconds - (hoursLeft * 3600) - (minutesLeft * 60)
  const timeLeftString = `${zeroFillTime(hoursLeft)}:${zeroFillTime(minutesLeft)}:${zeroFillTime(secondsLeft)}`;

  timeLeft.textContent = timeLeftString;
  document.title = timeLeftString;
}

function displayEndTime(end) {
  const endDate = new Date(end);

  const endTimeString = `${endDate.getHours() % 12}:${zeroFillTime(endDate.getMinutes())}`;

  endTime.textContent = `Timer Ends At: ${endTimeString}`;
}

function zeroFillTime(number) {
  return `${number < 10 ? '0' : ''}${number}`;
}

function buttonClick() {
  timer(parseInt(this.dataset.time));
}

function customTime(event) {
  event.preventDefault();

  timer(parseInt(this.minutes.value) * 60);
}

// Run
buttons.forEach(button => button.addEventListener('click', buttonClick));
document.customForm.addEventListener('submit', customTime);
