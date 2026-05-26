
const usuarioModel = require('../models/usuarioModel');

const authController = {
    telaLogin: (req, res) => {
        if (req.session && req.session.user) {
            return res.redirect('/');
        }
        res.render('login');
    },

    processarLogin: (req, res) => {
        const { email, senha } = req.body;
        
        const usuario = usuarioModel.verificarLogin(email, senha);
        
        if (usuario) {
            req.session.user = usuario;
            console.log(`Login realizado: ${usuario.nome} (${usuario.email})`);
            res.redirect('/');
        } else {
            res.send(`
                <script>
                    alert('Email ou senha incorretos!');
                    window.location.href = '/login';
                </script>
            `);
        }
    },

    logout: (req, res) => {
        req.session.destroy((erro) => {
            if (erro) {
                console.error('Erro no logout:', erro);
                res.send('Erro ao fazer logout');
            } else {
                res.redirect('/login');
            }
        });
    },
    
    listarUsuarios: (req, res) => {
        if (req.session.user.tipo !== 'admin') {
            return res.send('Acesso negado! Apenas administradores.');
        }
        
        const usuarios = usuarioModel.findAll();
        res.render('usuarios', { 
            usuarios: usuarios,
            usuario: req.session.user 
        });
    },

    formCriarUsuario: (req, res) => {
        if (req.session.user.tipo !== 'admin') {
            return res.send('Acesso negado! Apenas administradores.');
        }
        res.render('criarUsuario', { usuario: req.session.user });
    },
    
    criarUsuario: (req, res) => {
        if (req.session.user.tipo !== 'admin') {
            return res.send('Acesso negado! Apenas administradores.');
        }
        
        const { nome, email, senha, tipo } = req.body;
    
        const usuarioExistente = usuarioModel.findByEmail(email);
        if (usuarioExistente) {
            return res.send(`
                <script>
                    alert('Email já cadastrado!');
                    window.location.href = '/usuarios/novo';
                </script>
            `);
        }
        
        const novoUsuario = usuarioModel.create({
            nome,
            email,
            senha,
            tipo: tipo || 'usuario'
        });
        
        res.redirect('/usuarios');
    },
    
    deletarUsuario: (req, res) => {
        if (req.session.user.tipo !== 'admin') {
            return res.send('Acesso negado! Apenas administradores.');
        }
        
        const { id } = req.params;
        usuarioModel.delete(id);
        res.redirect('/usuarios');
    }
};

module.exports = authController;