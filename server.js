// server.js
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// CONFIGURAÇÃO DA SESSÃO (OBRIGATÓRIO - PRIMEIRO)
app.use(session({
    secret: 'segredo-para-criptografia-das-sessoes',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 3600000, // 1 hora
        httpOnly: true
    }
}));

// CONFIGURAÇÕES BÁSICAS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// CONFIGURAR EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ROTAS PÚBLICAS (NÃO PRECISAM DE AUTENTICAÇÃO)
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

// MIDDLEWARE DE AUTENTICAÇÃO (PROTEGE AS ROTAS)
const verificarAutenticacao = require('./middlewares/auth');

// ROTAS PROTEGIDAS (PRECISAM DE LOGIN)
const indexRoutes = require('./routes/index');
app.use('/', verificarAutenticacao, indexRoutes);

// ROTA PRINCIPAL (HOME)
app.get('/', verificarAutenticacao, (req, res) => {
    res.render('home', { usuario: req.session.user });
});

// ROTA PRODUTOS
app.get('/produtos', verificarAutenticacao, (req, res) => {
    res.render('produtos', { usuario: req.session.user });
});

// ROTA CONTATO
app.get('/contato', verificarAutenticacao, (req, res) => {
    res.render('contato', { usuario: req.session.user });
});

// ROTA SOBRE
app.get('/sobre', verificarAutenticacao, (req, res) => {
    res.render('sobre', { usuario: req.session.user });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
    console.log("Para testar sessão: http://localhost:3000/debug-session");
});