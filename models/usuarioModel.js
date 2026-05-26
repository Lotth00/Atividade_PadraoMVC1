// models/usuarioModel.js
const usuarios = [
    {
        id: 1,
        nome: 'Administrador',
        email: 'admin@teste.com',
        senha: '123456',
        tipo: 'admin'
    },
    
];

const usuarioModel = {
    findAll: () => {
        return usuarios.map(({ senha, ...usuario }) => usuario);
    },
    
    findByEmail: (email) => {
        return usuarios.find(usuario => usuario.email === email);
    },
    
    findById: (id) => {
        const usuario = usuarios.find(u => u.id === parseInt(id));
        if (usuario) {
            const { senha, ...usuarioSemSenha } = usuario;
            return usuarioSemSenha;
        }
        return null;
    },
    
    verificarLogin: (email, senha) => {
        const usuario = usuarios.find(u => u.email === email && u.senha === senha);
        if (usuario) {
            const { senha, ...usuarioSemSenha } = usuario;
            return usuarioSemSenha;
        }
        return null;
    },
    
    create: (usuario) => {
        const novoUsuario = {
            id: usuarios.length + 1,
            ...usuario
        };
        usuarios.push(novoUsuario);
        const { senha, ...usuarioSemSenha } = novoUsuario;
        return usuarioSemSenha;
    },
    
    update: (id, dadosAtualizados) => {
        const index = usuarios.findIndex(u => u.id === parseInt(id));
        if (index !== -1) {
            usuarios[index] = { ...usuarios[index], ...dadosAtualizados };
            const { senha, ...usuarioSemSenha } = usuarios[index];
            return usuarioSemSenha;
        }
        return null;
    },
    
    delete: (id) => {
        const index = usuarios.findIndex(u => u.id === parseInt(id));
        if (index !== -1) {
            usuarios.splice(index, 1);
            return true;
        }
        return false;
    }
};

module.exports = usuarioModel;