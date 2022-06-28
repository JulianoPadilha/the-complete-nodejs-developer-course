// The request lib is deprecated but we have postman-request which is a fork of the original
const request = require('postman-request');

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVsaWFub3BhZGlsaGEiLCJhIjoiY2p1NDV3OTl4MHVsYTQzbnpjN2I0bDdhbCJ9.gQPOKPnC6QQTEWTDaLJnAg&limit=1';

const weatherUrl = 'http://api.weatherstack.com/current?access_key=6200ec9ce5a600351af24de5cbe75093&query=37.8267,-122.4233';

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location!');
  } else {
    const { current } = response.body;
    const { temperature, feelslike, weather_descriptions } = current;
    console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`);
  }
});

request({ url: geocodeURL, json: true }, (error, response) => {
  const { features } = response.body;
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (!features.length) {
    console.log('Unable to find location. Try another search.');
  } else {
    const { center } = features[0];
    const [longitude, latitude] = center;
    console.log(`${latitude}, ${longitude}`);
  }
});