function handleMousePlaying(event) {
  const audio = document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"`);
  playSound(audio, this);
}

function handleKeyboardPlaying(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  playSound(audio, key);
}

function playSound(audio, key) {
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  key.classList.add('playing');
  audio.play();
}

function endPlayingTransition(event) {
  if (event.propertyName !== 'transform') {
    return;
  }

  this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', handleMousePlaying);
  key.addEventListener('transitionend', endPlayingTransition);
});
window.addEventListener('keyup', handleKeyboardPlaying);
