var express = require('express');
var router = express.Router();
var ctrlTermos = require('../controllers/termo');

/* GET home page. */
// router.get('/', ctrlTermos.inicia);
router.get('/:token', ctrlTermos.carregaPaginaInicial);
router.get('/termo/novo', ctrlTermos.carregaFormularioNovoTermo);
router.post('/termo/novo', ctrlTermos.salvaNovoTermo);
router.get('/termo/:id', ctrlTermos.removeTermo);
router.post('/termo/atualiza/:id', ctrlTermos.atualiza);
router.get('/termo/atualiza/:id', ctrlTermos.buscaPorId);
router.get('/callback', ctrlTermos.getPaginaCallback);
router.get('/termos/pesquisa/:' + encodeURIComponent('termoSolicitado'), ctrlTermos.buscaTermoPortugues);
router.get('/form/login', ctrlTermos.carregaFormularioLogin);
// router.get('/register', ctrlTermos.carregaFormularioRegister);
router.post('/login', ctrlTermos.login);
module.exports = router;