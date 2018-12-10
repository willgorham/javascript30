const shadowMagnitude = 200;
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(event) {
  const heroRect      = hero.getBoundingClientRect(),
        textRect      = text.getBoundingClientRect(),
        mouseXPercent = (event.pageX - heroRect.left) / heroRect.width,
        mouseYPercent = (event.pageY - heroRect.top) / heroRect.height,
        shadowX       = (mouseXPercent - .5) * -textRect.width,
        shadowY       = (mouseYPercent - .5) * -textRect.width;

  // text.style.textShadow = `${shadowX}px 0 0 rgba(0,0,0,.3),
  //                          ${-shadowX}px 0 0 rgba(255,0,0,.3),
  //                          0 ${shadowY}px 0 rgba(0,255,0,.3),
  //                          0 ${-shadowY}px 0 rgba(0,0,255,.3)`;

  text.style.textShadow = `${shadowX}px ${shadowY}px 0 rgba(0,0,0,.6),
                           ${-shadowX}px ${-shadowY}px 0 rgba(255,0,0,.6),
                           ${shadowY}px ${shadowX}px 0 rgba(0,255,0,.6),
                           ${-shadowY}px ${shadowX}px 0 rgba(0,0,255,.6)`;
}

hero.addEventListener('mousemove', shadow);
