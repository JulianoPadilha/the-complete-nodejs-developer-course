const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

/* 
https://www.mongodb.com/docs/manual/reference/method/ObjectId/
Returns a new ObjectId. The 12-byte ObjectId consists of:

- A 4-byte timestamp, representing the ObjectId's creation, measured in seconds since the Unix epoch.
- A 5-byte random value generated once per process. This random value is unique to the machine and process.
- A 3-byte incrementing counter, initialized to a random value.
*/
// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }
  const db = client.db(databaseName);
  // db.collection('users').insertOne({
  //   name: 'Juliano',
  //   age: 29,
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user');
  //   }

  //   console.log(result);
  // });

  // db.collection('users').insertMany([
  //   {
  //     name: 'Juliano',
  //     age: 29
  //   },
  //   {
  //     name: 'Carol',
  //     age: 33
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert users!');
  //   }

  //   console.log(result.insertedIds);
  // });

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Task 1',
  //     completed: true
  //   },
  //   {
  //     description: 'Task 2',
  //     completed: true
  //   },
  //   {
  //     description: 'Task 3',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks!');
  //   }

  //   console.log(result.insertedIds);
  // });
});