require('../src/db/mongoose');
const User = require('../src/models/user');

// Seleciona um usuário e atualiza sua idade, depois encadeia um outra promise para retornar a quantidade de usuário com a idade da query
User.findByIdAndUpdate('62fa747946034451a103020b', { age: 1 }).then(user => {
  console.log(user);
  return User.countDocuments({ age: 1 });
}).then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});