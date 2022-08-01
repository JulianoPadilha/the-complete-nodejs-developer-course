const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }
  const db = client.db(databaseName);

  // db.collection('users').updateOne({ _id: new ObjectId('62d52add6504e87a76477caa') }, {
  //   $set: {
  //     name: 'Padilha',
  //   },
  //   $inc: {
  //     age: 1
  //   },
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // }); 

  // ===Challenge=== //
  db.collection('tasks').updateMany({ completed: false }, {
    $set: {
      completed: true,
    },
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
});