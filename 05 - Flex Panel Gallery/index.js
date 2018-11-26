function handleClick() {
  this.classList.toggle('open');
}

function handleTransition(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', handleClick);
  panel.addEventListener('transitionend', handleTransition);
});
