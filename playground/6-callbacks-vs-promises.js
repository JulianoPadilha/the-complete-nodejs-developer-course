// ===Callback=== //
const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, [1, 2, 3]);
    // callback('This is an error!', undefined);
  }, 2000);
}

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});

// ===Promises=== //
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3]);
    // reject('Thigs went wrong!');
  }, 2000);
});

doWorkPromise.then((result) => {
  console.log('Sucess!', result);
}).catch((error) => {
  console.log('Error!', error);
});