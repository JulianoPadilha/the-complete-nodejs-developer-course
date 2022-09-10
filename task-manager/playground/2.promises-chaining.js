require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('62e8f534715e0558eebb1050').then(task => {
//   console.log(task);
//   return Task.countDocuments({ completed: false });
// }).then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error);
// });

const deleteTaskAndCount = async (taskId) => {
  await Task.findByIdAndDelete(taskId);
  const count = Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('62fee4d624de5848055d2494')
  .then(count => console.log(count))
  .catch(error => console.log(error));