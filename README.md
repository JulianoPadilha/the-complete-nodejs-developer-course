# The Complete Node.js Developer Course
Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more!

Rodar debugger do Chrome
1. Adicionar keyword `debugger` no código;
2. Rodar node com flag `inspect` habilitada. Ex: `node inspect yargs-challenge.js read --title="title"`
3. Abrir Chrome e acessar a página chrome://inspect
4. Clica em inspect em um dos targets disponíveis
5. Importar projeto/arquivo clicando em "Add folder to workspace"
6. Rodar debugger

### Deploy no Heroku
Para fazer deploy no heroku é preciso fazer push para a branch main e depois fazer um `git push heroku main` e o deploy vai começar automaticamente.
https://padilha-weather-app.herokuapp.com/

O PROJECT_PATH do heroku está configurado da seguinte forma:
`heroku config:set PROJECT_PATH=web-server`
Ou seja, o que estiver na pasta web-server vai ser deployado.

### MongoDB
Comando para iniciar o Mongo localmente no Mac após baixar o Mongo no site e criar a pasta mongodb-data.
`/Users/julianopadilha/mongodb/bin/mongod --dbpath=/Users/julianopadilha/mongodb-data`

Instalar o Studio 3T para gerenciar visualmente as bancos no Mongo
https://robomongo.org/

### Postman
Na aula 110 tem uma série de dicas de uso avançado do Postman, como criação de ambientes, variáveis, tests.

### Endpoints

> Users

**Create user** 
```
POST - /users

Body
{
	"name": "Juliano",
	"email": "juliano@mail.com",
	"password": "1234567" 
}
```

**Login user** 
```
POST - /users/login

Body
{
  "email": "juliano@mail.com",
  "password": "1234567"
}
```

**Logout user session** 
```
POST - /users/logout
```

**Logout all user sessions** 
```
POST - /users/logout/all
```

**Get authenticated user** 
```
GET - /users/me
```

**Get user by id** 
```
GET - /users/{ID}
```

**Update authenticated user** 
```
PATCH - /users/me

Body
{
  "name": "Juliano Padilha"
}
```

**Delete authenticated user** 
```
DELETE - /users/me
```

> Tasks

**Create task** 
```
POST - /tasks

Body
{
  "description": "Description...",
  "completed": false
}
```

**Get tasks from authenticated user** 
```
GET - /tasks

Params
sortBy = createdAt:asc | desc
```

**Get task by id** 
```
GET - /tasks/{ID}
```

**Update task by id** 
```
PATCH - /tasks/{ID}

Body 
{
  "completed": true
}
```

**Delete task by id** 
```
DELETE - /tasks/{ID}
```