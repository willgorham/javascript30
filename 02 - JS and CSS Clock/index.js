function setTime() {
  const dateNow = new Date(),
        seconds = dateNow.getSeconds(),
        minutes = dateNow.getMinutes(),
        hours   = dateNow.getHours();

  const degreesFromSeconds = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${degreesFromSeconds}deg)`;

  const degreesFromMinutes = (minutes / 60) * 360;
  minuteHand.style.transform =`rotate(${degreesFromMinutes}deg)`;

  const degreesFromHours = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${degreesFromHours}deg)`;
}


const hourHand   = document.querySelector('.hour-hand'),
      minuteHand = document.querySelector('.minute-hand'),
      secondHand = document.querySelector('.second-hand');

setInterval(setTime, 1000);
