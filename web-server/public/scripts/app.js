const input = document.querySelector('input');
const form = document.querySelector('form');
const searchResultMessage = document.querySelector('#search-result-message');

function renderFetchedData(data) {
  if (data.error) {
    return searchResultMessage.textContent = data.error;
  }
  return searchResultMessage.textContent = `${data.location} - ${data.forecast}`;
}

function fetchWeatherData() {
  const location = input.value;
  searchResultMessage.textContent = 'Loading...';
  fetch(`/weather?address=${location}`)
    .then(response => response.json())
    .then(data => renderFetchedData(data));
}

form.addEventListener('submit', (event) => { 
  event.preventDefault();
  fetchWeatherData();
});
