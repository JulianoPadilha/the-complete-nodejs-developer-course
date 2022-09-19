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