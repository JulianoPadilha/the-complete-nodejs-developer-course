function fetchData() {
  fetch('http://localhost:3000/weather?address=sao paulo')
    .then(response => response.json())
    .then(data => console.log(data));
}

fetchData();