// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.telaLogin);
router.post('/login', authController.processarLogin);
router.get('/logout', authController.logout);

router.get('/usuarios', authController.listarUsuarios);
router.get('/usuarios/novo', authController.formCriarUsuario);
router.post('/usuarios', authController.criarUsuario);
router.get('/usuarios/deletar/:id', authController.deletarUsuario);

module.exports = router;