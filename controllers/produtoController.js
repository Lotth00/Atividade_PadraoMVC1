let produtos = require('../models/produtoModel');

exports.getHome = (req, res) => res.render('home');
exports.getSobre = (req, res) => res.render('sobre');
exports.getContato = (req, res) => res.render('contato');

// Listar produtos
exports.listarProdutos = (req, res) => {
    res.render('produtos', { produtos });
};

// Criar produto
exports.criarProduto = (req, res) => {
    let ultimoId = 0;
    
    if (produtos.length > 0) {
        ultimoId = produtos[produtos.length - 1].id;
    }

    // O novo ID vai ser o último + 1
    const novoId = ultimoId + 1;

    const novo = { 
        id: novoId, 
        nome: req.body.nome, 
        preco: req.body.preco 
    };

    produtos.push(novo);
    res.redirect('/produtos');
};

// Deletar produto
exports.deletarProduto = (req, res) => {
    const id = req.params.id;
    produtos = produtos.filter(p => p.id != id); // Remove da lista
    res.redirect('/produtos');
};