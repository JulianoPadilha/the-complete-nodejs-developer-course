const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {
      if (value.toLowercase().includes('password')) {
        throw new Error('Password cannot contain "password"');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  },
});

// const me = new User({
//   name: '  Juliano  ',
//   email: 'TESTE@teste.com  ',
//   password: '12141285902892'
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
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
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
