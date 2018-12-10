const list     = document.querySelector('#bands');
      articles = ['An', 'A', 'The'];
      bands    = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticles(text, words = articles) {
  const stringRegEx = words.reduce((str, val, i, arr) => {
    const separator = (i === arr.length - 1) ? '' : '|';
    return str += `${val} ${separator}`;
  }, '^');

  const matches = new RegExp(stringRegEx, 'i');

  return text.replace(matches, '').trim();
}

const sortedNames = bands.sort((b1, b2) => removeArticles(b1) > removeArticles(b2) ? 1 : -1);

list.innerHTML = sortedNames.map(name => `<li>${name}</li>`).join('');
