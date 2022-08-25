require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('62e8f534715e0558eebb1050').then(task => {
  console.log(task);
  return Task.countDocuments({ completed: false });
}).then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
})