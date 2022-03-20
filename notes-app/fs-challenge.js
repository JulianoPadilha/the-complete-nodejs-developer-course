const fs = require('fs');

fs.writeFileSync('challenge.txt', 'My name is Juliano');
fs.appendFileSync('challenge.txt', '\nMy new content');