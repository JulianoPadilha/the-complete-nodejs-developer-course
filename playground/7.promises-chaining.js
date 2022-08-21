const add = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(num1 + num2);
    }, 2000);
  });
}

// Maneira incorreta de lidar com encadeamento de Promises
// add(1, 2).then(sum => {
//   console.log(sum);

//   add(sum, 5).then(sum2 => {
//     console.log(sum2);
//   }).catch(error => {
//     console.log(error);
//   })
// }).catch(error => {
//   console.log(error);
// });

// Promises chaining
add(1, 2).then(sum => {
  console.log(sum);
  return add(sum, 5);
}).then(sum2 => {
  console.log(sum2);
}).catch(error => {
  console.log(error);
})