var mongoose = require('mongoose');

var termo = new mongoose.Schema({
    emPortugues: {
        type: String,
        required: true
    },
    emTerena: {
        type: String,
        required: true
    },
    aplicacaoFrase: {
        type: String,
        required: true
    },
    significadoAplicacaoFrase: {
        type: String,
        required: true
    },
    categoria: {
        type: String
    },
    multimidia: [{
        tipo: String,
        url: String
    }]
});

module.exports = mongoose.model('Termo', termo);