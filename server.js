const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); 

app.use('/', routes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

