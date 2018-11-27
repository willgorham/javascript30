const endpoint       = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
      cities         = [],
      input          = document.querySelector('.search'),
      suggestionList = document.querySelector('.suggestions');

// Get data
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

input.addEventListener('change', handleUserInput);
input.addEventListener('keyup', handleUserInput);


// Functions

function handleUserInput() {
  const userInput   = this.value;
        suggestions = getSuggestions(userInput)

  showSuggestions(suggestions, userInput);
}

function showSuggestions(suggestions, stringToMatch) {
  const suggestionsHTML = suggestions.map(location => {
    const regex      = new RegExp(stringToMatch, 'gi'),
          cityName   = location.city.replace(regex, `<span class="hl">${stringToMatch}</span>`),
          stateName  = location.state.replace(regex, `<span class="hl">${stringToMatch}</span>`),
          population = formatNumber(location.population);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
      </li>
    `;
  }).join('');

  suggestionList.innerHTML = suggestionsHTML;
}

function getSuggestions(stringToMatch) {
  const regex = new RegExp(stringToMatch, 'gi'); // Can't use .includes due to case sensitivity

  return cities.filter(location => location.city.match(regex) || location.state.match(regex));
}


function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
