const nav = document.querySelector('#main');
const navTop = nav.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', fixNav);

function fixNav(event) {
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('sticky-nav');
  } else {
    document.body.style.paddingTop = '0';
    document.body.classList.remove('sticky-nav');
  }
}
