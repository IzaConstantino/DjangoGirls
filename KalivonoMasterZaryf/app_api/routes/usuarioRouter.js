// var express = require('express');
// var router = express.Router();
// var usuarioController = require('../controllers/usuarioController');

// function pegarToken(req, res, next) {
//     var header = req.header['authorization'];

//     if (typeof header !== 'undefined') {
//         req.token = header;
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// }
// router.post('/cadastrar', function(req, res) {
//     console.log(req.params)
//     var nome = req.body.nome;
//     var senha = req.body.senha;
//     var email = req.body.email
//     usuarioController.save(nome, senha, email, function(resp) {
//         console.log(resp)
//         res.json(resp);
//     })
// })

// module.exports = router;