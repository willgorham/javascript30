function setTime(hands) {
  const dateNow = new Date(),
        seconds = dateNow.getSeconds(),
        minutes = dateNow.getMinutes(),
        hours   = dateNow.getHours(),
        degrees = {
          second: (seconds / 60) * 360,
          minute: (minutes / 60) * 360,
          hour:   (hours / 12) * 360
        };


  Object.keys(hands).forEach(function(handName) {
    // Turn off transition at 0deg to prevent visual jump
    hands[handName].style['transition-duration'] = (0 === degrees[handName]) ? '0s' : '.05s';
    hands[handName].style.transform = `rotate(${degrees[handName]}deg)`;
  });
}


const hands = {
  second: document.querySelector('.second-hand'),
  minute: document.querySelector('.minute-hand'),
  hour:   document.querySelector('.hour-hand')
};

setInterval(setTime, 1000, hands);
