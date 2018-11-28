const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let holdingShift = false,
    lastChecked  = false;

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', handleCheck);
});

document.addEventListener('keydown', event => {
  if ("Shift" === event.key) {
    holdingShift = true;
  }
});

document.addEventListener('keyup', event => {
  if ("Shift" === event.key) {
    holdingShift = false;
  }
});

function handleCheck(event) {
  if (!this.checked) {
    lastChecked = false;
    return;
  }

  if (lastChecked && holdingShift) {
    checkBoxesBetween(lastChecked, this);
  }

  lastChecked = this;
}

function checkBoxesBetween(firstBox, secondBox) {
  let betweenBoxes = false;

  checkboxes.forEach((checkbox, index) => {
    if (firstBox === checkbox || secondBox === checkbox) {
      betweenBoxes = !betweenBoxes;
    }

    if (betweenBoxes) {
      checkbox.checked = true;
    }
  });
}
