const express = require('express');
require('./db/mongoose'); //executa arquivo de conexão com o banco de dados
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// Exemplo da aula sobre Middlewares do Express
// app.use((req, res, next) => {
//   res.status(503).send('Maintenance... Check back soon!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('6330848b6962a59d13ac2620');
  // await task.populate('owner');
  // console.log(task);

  // const user = await User.findById('633084876962a59d13ac261b');
  // await user.populate('tasks');
  // console.log(user.tasks);
}

main();