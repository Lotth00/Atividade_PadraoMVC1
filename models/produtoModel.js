/**
 * Modelo de dados para produtos (armazenamento em memória).
 * @module models/produtoModel
 */

/**
 * @typedef {Object} Produto
 * @property {number} id - Identificador único do produto.
 * @property {string} nome - Nome do produto.
 * @property {number} preco - Preço do produto.
 */

/** @type {Produto[]} */
let produtos = [
    { id: 1, nome: "Manga", preco: 10.50 },
    { id: 2, nome: "Abacate", preco: 20.00 }
];

module.exports = produtos;