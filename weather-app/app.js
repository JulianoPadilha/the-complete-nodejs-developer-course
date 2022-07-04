const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const addressLocationInputFromTeminal = process.argv[2];

if (!addressLocationInputFromTeminal) {
  return console.log('Please provide an address.');
}
geocode(addressLocationInputFromTeminal, (error, geocodeData) => {
  if (error) {
    return console.log(error);
  }
  forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(geocodeData.location);
    console.log(forecastData);
  });
});

