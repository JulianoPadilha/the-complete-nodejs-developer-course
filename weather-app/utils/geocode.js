// The request lib is deprecated but we have postman-request which is a fork of the original
const request = require('postman-request');

/**
 * @param  {string} address
 * @param  {function} callback
 */
 const geocode = (address, callback) => {
  const token = 'pk.eyJ1IjoianVsaWFub3BhZGlsaGEiLCJhIjoiY2p1NDV3OTl4MHVsYTQzbnpjN2I0bDdhbCJ9.gQPOKPnC6QQTEWTDaLJnAg';
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}&limit=1`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (!response.body.features.length) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const { features } = response?.body;
      const { center, place_name } = features[0];
      const [longitude, latitude] = center;
      callback(undefined, {
        latitude,
        longitude,
        location: place_name
      });
    }
  });
}

module.exports = geocode;