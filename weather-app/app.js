const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=6200ec9ce5a600351af24de5cbe75093&query=37.8267,-122.4233';

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});