var Termo = require('../models/termo');


// module.exports.register = function(user) {
//     return $http.post('/api/register', user).success(function(data) {
//         saveToken(data.token);
//     });
// };

// module.exports.login = function(user) {
//     return $http.post('/api/login', user).success(function(data) {
//         saveToken(data.token);
//     });
// };
module.exports.buscaTermos = function(req, res) {
    Termo.find().sort({ 'emTerena': 1 }).limit().exec()
        .then(
            function(termos) {
                res.json(termos);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
};

module.exports.salvaTermo = function(req, res) {
    Termo.create(req.body.termo)
        .then(
            function(termo) {
                res.status(201).json(termo);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
};

module.exports.buscaPorCategoria = function(req, res) {
    Termo.find({ 'categoria': req.params.categoria })
        .then(
            function(termos) {
                res.json(termos);
            },
            function(erro) {
                console.log(erro);
                res.status(500).json(erro);
            }
        );
};

module.exports.buscaTermoPortugues = function(req, res) {
    Termo.find({ 'emPortugues': new RegExp(req.params.termoSolicitado, 'i') })
        .then(
            function(termos) {
                res.json(termos);
            },
            function(erro) {
                console.log(erro);
                res.status(500).json(erro);
            }
        );
};

module.exports.pegaPorId = function(req, res) {
    var id = req.params.id;
    Termo.findById(id).exec()
        .then(
            function(termo) {
                res.json(termo);
            },
            function(erro) {
                res.status(500).json(erro);
            }
        );
}

module.exports.atualizaTermo = function(req, res) {
    var id = req.params.id;
    var termo = req.body.termo;
    console.log('atualizando')
    Termo.findByIdAndUpdate(id, termo).exec()
        .then(
            function(termo) {
                res.status(201).json(termo);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
};

module.exports.removeTermo = function(req, res) {
    var id = req.params.id;
    Termo.remove({ "_id": id }).exec()
        .then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        );
};