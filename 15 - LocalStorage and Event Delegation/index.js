const addPlatesForm = document.querySelector('.add-items');
const platesList    = document.querySelector('.plates');
const plates        = JSON.parse(localStorage.getItem('plates')) || [];

// Actions
const deleteAllButton  = document.querySelector('#delete-all');
const uncheckAllButton = document.querySelector('#uncheck-all');
const checkAllButton   = document.querySelector('#check-all');

addPlatesForm.addEventListener('submit', addItem);
platesList.addEventListener('change', toggleDone);

deleteAllButton.addEventListener('click', handleDelete);
uncheckAllButton.addEventListener('click', handleUncheckAll);
checkAllButton.addEventListener('click', handleCheckAll);

populateList(plates, platesList);


function addItem(event) {
  event.preventDefault(); // Prevent page refresh.

  const itemName = this.querySelector('[name="item"]').value;
  const item = {
    name: itemName,
    done: false
  };

  plates.push(item);
  populateList(plates, platesList);
  localStorage.setItem('plates', JSON.stringify(plates));
  this.reset(); // CLear form.
}

function populateList(items = [], itemsList) {
  itemsList.innerHTML = items.map((item, index) => {
    const checked = item.done ? 'checked' : '';
    return (
      `<li>
         <input type="checkbox" data-index="${index}" id="item${index}" ${checked}>
         <label for="item${index}">${item.name}</label>
      </li>`
    );
  }).join('');
}

function toggleDone(event) {
  if (!event.target.matches('[type="checkbox"]')) {
    return;
  }

  const index = event.target.dataset.index;
  plates[index].done = event.target.checked;

}

function handleDelete(event) {
  plates.length = 0;
  populateList(plates, platesList);
  localStorage.setItem('plates', JSON.stringify(plates));
}

function handleUncheckAll(event) {
  plates.forEach(plate =>  {
    plate.done = false;
  })

  populateList(plates, platesList);
  localStorage.setItem('plates', JSON.stringify(plates));
}

function handleCheckAll(event) {
  plates.forEach(plate =>  {
    plate.done = true;
  })

  populateList(plates, platesList);
  localStorage.setItem('plates', JSON.stringify(plates));
}

