const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public'))); //diz pra meu servidor onde ta meu css (se não ter ele não acha)

app.set('view engine', 'ejs'); // diz que to usando  o EJS inves do html normal
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); //para ler dados do formulário (se não tiver ele não lê os dados do formulário)

app.use('/', routes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

