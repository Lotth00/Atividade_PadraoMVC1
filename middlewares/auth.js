// middlewares/auth.js
function verificarAutenticacao(req, res, next) {
    // Verifica se a sessão existe e se tem usuário
    if (req.session && req.session.user) {
        next(); // Usuário logado, pode passar
    } else {
        // Não está logado, redireciona para o login
        res.redirect('/login');
    }
}

module.exports = verificarAutenticacao;