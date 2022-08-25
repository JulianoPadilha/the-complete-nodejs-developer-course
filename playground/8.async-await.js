const add = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num1 < 0 || num2 < 0) {
        return reject('Numbers must be non-negative.');
      }
      return resolve(num1 + num2);
    }, 2000);
  });
}

const doWork = async () => {
  const sum = await add(1, 99);
  const sum2 = await add(sum, 50);
  const sum3 = await add(sum2, -30);
  return sum3;
};

doWork().then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});