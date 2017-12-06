// var Usuario = require('../models/usuario');


// module.exports.save = function(nome, senha, email, callback) {
//     console.log(nome, senha, email)
//     Usuario.findOne({ 'nome': nome, }, function(erro, usuario) {
//         if (erro) {
//             callback(erro);
//         } else if (usuario) {
//             callback({ mensagem: 'Usuário já existe' });
//         } else {
//             var novoUsuario = new Usuario();
//             novoUsuario.nome = nome;
//             novoUsuario.email = email
//             novoUsuario.senha = novoUsuario.gerarSenha(senha);
//             novoUsuario.token = novoUsuario.gerarToken(nome, senha);
//             novoUsuario.save(function(erro, usuario) {
//                 if (erro) {
//                     callback(erro);
//                 } else {
//                     callback(usuario);
//                 }
//             })
//         }
//     })
// }
// module.exports.login = function(nome, senha, callback) {
//     Usuario.findOne({ 'nome': nome }, function(erro, usuario) {
//         if (erro) {
//             callback('Deu erro');
//         } else if (usuario) {
//             if (usuario.validarSenha(senha)) {
//                 callback(usuario.token);
//             } else {
//                 callback('Senha Incorreta');
//             }
//         } else {
//             callback('Usuario inexistente');
//         }
//     })
// }
// module.exports.list = function(token, callback) {
//     Usuario.findOne({ 'token': token }, function(erro, usuario) {
//         if (erro) {
//             callback('Deu erro');
//         } else if (usuario) {
//             callback(usuario.nome);
//         } else {
//             callback('Usuario não encontrado')

//         }
//     })
// }