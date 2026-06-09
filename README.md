# Atividade Padrão MVC

Aplicação web para gerenciamento de produtos com autenticação de usuários, implementando o padrão de arquitetura MVC (Model-View-Controller).

## Índice

- [Como rodar o projeto](#como-rodar-o-projeto)
- [Funcionalidades e rotas](#funcionalidades-e-rotas)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Autor](#autor)

## Como rodar o projeto

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- Navegador web

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Lotth00/Atividade_PadraoMVC1.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd Atividade_PadraoMVC1
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor:**
   ```bash
   node server.js
   ```

5. **Acesse a aplicação:**
   Abra o navegador e vá para `http://localhost:3000`

## Funcionalidades e rotas

### Autenticação (rotas públicas)

 `GET /login` -> Exibe o formulário de login 
 `POST /login` -> Envia e-mail e senha para autenticação 

**Exemplo de uso no navegador:**  
Acesse `http://localhost:3000/login`  
Preencha com as credenciais abaixo e clique em "Entrar".

### Usuários (apenas admin)

`GET /usuarios` -> Lista todos os usuários cadastrados
`GET /criar-usuario` -> Exibe formulário para criar novo usuário 
`POST /criar-usuario` -> Cadastra um novo usuário 
`POST /deletar-usuario/:id` -> Remove um usuário 

**Acesso restrito:** apenas usuários com `isAdmin = true`

### Produtos (usuário logado)


`GET /produtos` -> Lista todos os produtos 
`GET /criar-produto` -> Exibe formulário de criação de produto 
`POST /criar-produto` -> Cadastra um novo produto 
`GET /editar-produto/:id` -> Exibe formulário de edição 
`POST /editar-produto/:id` -> Atualiza os dados do produto 
`POST /deletar-produto/:id` -> Remove um produto 

### Páginas estáticas

`GET /`-> Página inicial (home) 
`GET /sobre` -> Página institucional
`GET /contato` -> Página de contato 

### Exemplo prático

1. **Acesse a página de login:**  
   `http://localhost:3000/login`

2. **Use as credenciais de administrador pré-cadastradas:**
   - E-mail: `admin@teste.com`
   - Senha: `123456`

3. **Após o login, você será redirecionado para a lista de produtos.**

4. **Clique em "Adicionar produto"** e preencha:
   - Nome: `Teclado Mecânico`
   - Preço: `199.90`
   - Descrição: `Teclado RGB com switch blue`

5. **Para gerenciar usuários**, acesse `http://localhost:3000/usuarios` (apenas admin).

## Tecnologias utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **EJS** - Template engine para renderização dinâmica
- **express-session** - Gerenciamento de sessões de usuário
- **CSS3** - Estilização das páginas

## Autor

Desenvolvido como atividade acadêmica para disciplina de Desenvolvimento Web.

GitHub: [Lotth00](https://github.com/Lotth00)
```