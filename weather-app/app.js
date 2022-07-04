const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const addressLocationInputFromTeminal = process.argv[2];

if (!addressLocationInputFromTeminal) {
  return console.log('Please provide an address.');
}
geocode(addressLocationInputFromTeminal, (error, { latitude, longitude, location } = {}) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(forecastData);
  });
});

