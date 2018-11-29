const player             = document.querySelector('.player'),
      video              = player.querySelector('.viewer'),
      progressBarWrapper = player.querySelector('.progress'),
      progressBar        = player.querySelector('.progress__filled'),
      toggle             = player.querySelector('.toggle'),
      skipButtons        = player.querySelectorAll('[data-skip]'),
      ranges             = player.querySelectorAll('.player__slider');


function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateToggle() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = percent + '%';
}

function scrub(event) {
  const percent = event.offsetX / progressBarWrapper.offsetWidth;
  video.currentTime = video.duration * percent;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let progressMouseDown = false;
progressBarWrapper.addEventListener('mousedown', () => progressMouseDown = true);
document.addEventListener('mouseup', () => progressMouseDown = false);
progressBarWrapper.addEventListener('click', scrub);
video.addEventListener('mousemove', (e) => progressMouseDown && scrub(e));
progressBarWrapper.addEventListener('mousemove', (e) => progressMouseDown && scrub(e));
