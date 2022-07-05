const express = require('express');

const app = express();

// app.get('', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
app.get('', (req, res) => {
  res.send('<h1>Home</h1>');
});
app.get('/help', (req, res) => {
  res.send({
    name: 'Juliano',
    age: 30
  });
});
app.get('/about', (req, res) => {
  res.send('<h1>About page<h1>');
});
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing!',
    location: 'New York'
  });
});

app.listen(3000, () => {
  console.log('Server is up!')
});