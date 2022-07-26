const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }
  const db = client.db(databaseName);

  // findOne
  // db.collection('users').findOne({ _id: new ObjectId('62d52e0d36f17bef6c1a38a7') }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch!');
  //   }
  //   console.log(user);
  // });

  // find
  // db.collection('users').find({ age: 29 }).toArray((error, users) => {
  //   if (error) {
  //     return console.log('Unable to fetch!');
  //   }
  //   console.log(users);
  // });

  // Challenge //
  //1. Use findOne to fetch the last task by id
  db.collection('tasks').findOne({ _id: new ObjectId('62d52ece686a009d5c744c64') }, (error, task) => {
    if (error) {
      return console.log('Unable to fetch!');
    }
    console.log(task);
  });
  //2. Usefind to fetch all tasks that are not completed
  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    if (error) {
      return console.log('Unable to fetch!');
    }
    console.log(tasks);
  });
});