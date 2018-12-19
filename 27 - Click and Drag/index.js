const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', handleDown);
slider.addEventListener('mousemove', handleMove);
slider.addEventListener('mouseup', handleUp);

function handleDown(event) {
  this.classList.add('active');
  isDown = true;
  scrollLeft = this.scrollLeft;
  const sliderRect = slider.getBoundingClientRect();
  startX = event.clientX - sliderRect.left;
}

function handleUp() {
  isDown = false;
  this.classList.remove('active');
}

function handleMove(event) {
  if (!isDown) {
    return;
  }

  const sliderRect = slider.getBoundingClientRect();
  const slideX = event.clientX - sliderRect.left;
  const scrollMagnitude = 2;
  slider.scrollLeft = scrollLeft + (slideX - startX) * scrollMagnitude;

}
