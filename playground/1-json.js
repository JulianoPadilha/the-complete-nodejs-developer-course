const fs = require('fs');

// const book  = {
//   title: 'Fight Club',
//   author: 'Chuck Palahniuk'
// };

// Transforma objeto em JSON e escreve um novo arquivo no sistema para armazenar os dados
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// fs.writeFileSync('1-json.json', bookJSON);

// readFileSync retorna um Buffer que precisamos transformar em string
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Outra opção é fazer o parse direto do Buffer
// const dataBuffer2 = fs.readFileSync('1-json.json');
// const data2 = JSON.parse(dataBuffer2);
// console.log(data2.title);


// ---------- //
// Challenge //
const dataBuffer = fs.readFileSync('1-challenge.json');
const userData = JSON.parse(dataBuffer);
userData.name = 'Juliano';
userData.age = 29;
const userDataJSON = JSON.stringify(userData);
fs.writeFileSync('1-challenge.json', userDataJSON);
