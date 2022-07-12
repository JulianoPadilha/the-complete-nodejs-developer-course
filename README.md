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