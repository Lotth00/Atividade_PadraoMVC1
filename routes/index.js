const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.get('/', controller.getHome);
router.get('/sobre', controller.getSobre);
router.get('/contato', controller.getContato);
router.get('/produtos', controller.listarProdutos);
router.post('/produtos', controller.criarProduto);
router.get('/produtos/deletar/:id', controller.deletarProduto);
router.get('/produtos/editar/:id', controller.getEditarProduto);
router.post('/produtos/editar/:id', controller.postEditarProduto);

module.exports = router;