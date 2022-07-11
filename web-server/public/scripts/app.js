const input = document.querySelector('input');
const button = document.querySelector('button');

function fetchWeatherData(location) {
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then(response => response.json())
    .then(data => data);
}

function onClickSearchButton() {
  const location = input.value;
  button.addEventListener('click', fetchWeatherData(location));
}
