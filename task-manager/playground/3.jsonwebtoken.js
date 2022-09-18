const jwt = require('jsonwebtoken');

const myFunction = () => {
  const token = jwt.sign({ _id: '1234' }, 'minhasenha', { expiresIn: '2 days' });
  console.log(token);

  const data = jwt.verify(token, 'minhasenha');
  console.log(data);
}

myFunction();