const videos = document.querySelectorAll('[data-time]');

const totalSeconds = Array.from(videos)
  .map(video => video.dataset.time.split(':').reverse().map(parseFloat))
  .reduce((total, time) => {
    const [seconds = 0, minutes = 0, hours = 0] = time;
    return total + seconds + minutes * 60 + hours * 60 * 60;
  }, 0);

console.log(secondsToTime(totalSeconds));

function secondsToTime(totalSeconds) {
  const secondsPerMinute = 60;
  const minutesPerHour = 60;

  const hours = Math.floor(totalSeconds / secondsPerMinute / minutesPerHour);
  const minutes = Math.floor((totalSeconds / secondsPerMinute) - (hours * minutesPerHour));
  const seconds = totalSeconds - (minutes * secondsPerMinute) - (hours * minutesPerHour * secondsPerMinute);

  return `${hours}:${minutes}:${seconds}`;
}
