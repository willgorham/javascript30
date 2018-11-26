function handleControlUpdate() {
  const controlName  = `--${this.name}`,
        controlValue = `${this.value}${this.dataset.sizing || ''}`;

  document.documentElement.style.setProperty(controlName, controlValue);
}


const controls = document.querySelectorAll('.controls input');
console.log(controls);

controls.forEach(function(control) {
  control.addEventListener('change', handleControlUpdate);
  control.addEventListener('mousemove', handleControlUpdate); // Not performant, but... 🤷‍♂️
});
