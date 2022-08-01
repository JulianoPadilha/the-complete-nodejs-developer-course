const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }
  const db = client.db(databaseName);

  // db.collection('users').deleteMany({ age: 29 })
  //   .then((result) => {
  //     console.log(result);
  //   }).catch((error) => {
  //     console.log(error);
  //   });

  // ===Challenge=== //
  db.collection('tasks').deleteOne({ description: 'Task 2' })
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
});