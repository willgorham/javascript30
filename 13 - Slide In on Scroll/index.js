function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slides = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', debounce(slideInImages));

function slideInImages(event) {

  slides.forEach(slide => {
    const windowBottomY = window.scrollY + window.innerHeight;
    const slideRect = slide.getBoundingClientRect();
    const slideMiddleY = window.scrollY + slideRect.top + (slide.height / 2);
    if (slideMiddleY < windowBottomY) {
      slide.classList.add('active');
    }
  })

}
