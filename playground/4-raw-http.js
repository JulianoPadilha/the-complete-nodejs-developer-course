const http = require('http');
const accessKey = '6200ec9ce5a600351af24de5cbe75093';
const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=45,-75`;

//Request é baseado em eventos no node.js
const request = http.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error: ', error);
});

request.end();