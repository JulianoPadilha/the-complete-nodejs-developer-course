const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

geocode('Santo André', (error, data) => {
  console.log(error);
  console.log(data);
});

forecast(44.1545, -75.7088, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
});