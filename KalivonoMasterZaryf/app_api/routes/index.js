var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
var ctrlTermos = require('../controllers/termo');
var ctrlAuth = require('../controllers/authentication');

router.get('/termos', ctrlTermos.buscaTermos);
router.post('/termos', ctrlTermos.salvaTermo);
router.post('/termos/atualiza/:id', ctrlTermos.atualizaTermo);
router.delete('/termos/:id', ctrlTermos.removeTermo);
router.get('/termos/:id', ctrlTermos.pegaPorId);
router.get('/termos/categoria/:' + encodeURIComponent('categoria'), ctrlTermos.buscaPorCategoria);
router.get('/termos/termoSolicitado/:' + encodeURIComponent('termoSolicitado'), ctrlTermos.buscaTermoPortugues);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
module.exports = router;