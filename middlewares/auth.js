/**
 * Middleware de autenticação.
 * Verifica se o usuário possui sessão ativa.
 * @module middlewares/auth
 */

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 */

/**
 * Verifica se o usuário está autenticado.
 * Se estiver, chama `next()`. Caso contrário, redireciona para /login.
 * @param {Request} req - Objeto da requisição Express.
 * @param {Response} res - Objeto de resposta Express.
 * @param {NextFunction} next - Função next para prosseguir.
 * @returns {void}
 * @throws {void} Apenas redireciona, não lança exceção.
 */
function verificarAutenticacao(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = verificarAutenticacao;