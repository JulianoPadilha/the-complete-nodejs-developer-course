// The request lib is deprecated but we have postman-request which is a fork of the original
const request = require('postman-request');

/**
 * @param  {string} latitude
 * @param  {string} longitude
 * @param  {function} callback
 */
const forecast = (latitude, longitude, callback) => {
  const accessKey = '6200ec9ce5a600351af24de5cbe75093';
  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location!', undefined);
    } else {
      const { current } = response.body;
      const { temperature, feelslike, weather_descriptions } = current;
      callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`);
    }
  });
}

module.exports = forecast;