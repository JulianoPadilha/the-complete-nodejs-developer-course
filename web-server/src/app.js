const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../template/views');
const partialsPath = path.join(__dirname, '../template/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup statis directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Juliano Padilha',
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Juliano Padilha',
  });
});
app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is the help page!',
    title: 'Help',
    name: 'Juliano Padilha',
  });
});
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing!',
    location: 'New York'
  });
});
app.get('/help/*', (req, res) => {
  res.render('404', {
    errorMessage: 'Help article not found.',
    title: 'Help',
    name: 'Juliano Padilha',
  });
});
app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page not found.',
    title: '404',
    name: 'Juliano Padilha'
  });
});

app.listen(3000, () => {
  console.log('Server is up!')
});