const nav = document.querySelector('.top');
const items = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');

items.forEach(item => item.addEventListener('mouseenter', handleItemEnter));
items.forEach(item => item.addEventListener('mouseleave', handleItemLeave));

function handleItemEnter() {
  this.classList.add('trigger-enter')
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active'), 150;
    }
  });

  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownRect = dropdown.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();

  background.style.width = dropdownRect.width + 'px';
  background.style.height = dropdownRect.height + 'px'
  background.style.top = dropdownRect.top - navRect.top + 'px';
  background.style.left = dropdownRect.left - navRect.left + 'px';
}

function handleItemLeave() {
  this.classList.remove('trigger-enter-active');
  setTimeout(() => this.classList.remove('trigger-enter'), 150);
  background.classList.remove('open');
}

