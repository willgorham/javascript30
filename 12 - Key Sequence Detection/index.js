const pressedKeys = [],
      code        = 'willyg';

window.addEventListener('keyup', (event) => {
  pressedKeys.push(event.key);
  pressedKeys.splice(0, pressedKeys.length - code.length);

  if (code === pressedKeys.join('')) {
    console.log('DING DING!');
    cornify_add();
  }
});
