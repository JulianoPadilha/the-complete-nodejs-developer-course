const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: 'Juliano',
//   age: 29
// });

// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log(error);
// });

// === Challenge ===//
const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task = new Task({
  description: 'Task 1',
  completed: false,
});

task.save().then(() => {
  console.log(task);
}).catch((error) => {
  console.log(error);
});
