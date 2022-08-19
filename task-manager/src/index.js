const express = require('express');
require('./db/mongoose'); //executa arquivo de conexão com o banco de dados
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);

  user.save().then(data => {
    res.send(data);
  }).catch(error => {
    res.status(400).send(error);
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});