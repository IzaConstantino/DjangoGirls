// var request = require('request');

// var opcoesApi = {
//     servidor: "http://localhost:3000"
// };

// var renderizaPaginaInicial = function(req, res, termos) {
//     var mensagem;
//     if (!(termos instanceof Array)) {
//         mensagem = "Erro ao tentar recuperar os termos";
//         resposta = [];
//     } else if (!termos.length) {
//         mensagem = "Nenhum termo cadastrado";
//     } else {
//         mensagem = termos.length + ' termos cadastrados';
//     }

//     res.render('index', {
//         // termos: termos,
//         mensagem: mensagem
//     });
// };

// var carregaPaginaInicial = function(req, res) {
//     var caminho = '/api/termos';
//     var opcoesRequisicao = {
//         url: opcoesApi.servidor + caminho,
//         method: 'GET',
//         json: {}
//     };
//     request(
//         opcoesRequisicao,
//         function(erro, resposta, termos) {
//             renderizaPaginaInicial(req, res, termos);
//         }
//     );
// };

// module.exports.inicia = function(req, res) {
//     carregaPaginaInicial(req, res);
// };

// module.exports.carregaFormularioNovoTermo = function(req, res) {
//     res.render('termo', {
//         titulo: 'Novo termo'
//     });
// };
// module.exports.carregaFormularioLogin = function(req, res) {
//     res.render('usuario', {
//         titulo: 'LOGIN'
//     });
// };
// module.exports.carregaFormularioRegister = function(req, res) {
//     res.render('register', {
//         titulo: 'REGISTRO'
//     });
// }
// module.exports.login = function(req, res) {
//     var caminho = '/api/login';
//     var opcoesRequisicao = {
//         url: opcoesApi.servidor + caminho,
//         method: 'POST',
//         json: { email: req.body.email, password: req.body.password }
//     }
//     request(
//         opcoesRequisicao,
//         function(erro, resposta, token) {
//             if (token.message) {
//                 res.render('usuario', {
//                     mensagem: token.message,
//                 });
//             } else {
//                 carregaTermos(req, res, null, token)
//             }
//         }
//     )
// }

// module.exports.salvaNovoTermo = function(req, res) {
//     var caminho = '/api/termos';
//     var termo = req.body;
//     termo.multimidia = JSON.parse(termo.multimidia);
//     var opcoesRequisicao = {
//         url: opcoesApi.servidor + caminho,
//         method: 'POST',
//         json: {
//             termo: termo
//         }
//     };
//     request(
//         opcoesRequisicao,
//         function(erro, resposta, body) {
//             var mensagem = 'Termo salvo com sucesso!',
//                 sucesso = true;
//             console.log('Status: ' + resposta.statusCode);
//             if (resposta.statusCode === 500 || erro) {
//                 mensagem = 'Ocorreu um erro ao tentar salvar o termo';
//                 sucesso = false;
//             }
//             res.render('termo', {
//                 titulo: 'Novo termo',
//                 mensagem: mensagem,
//                 sucesso: sucesso
//             });
//         }
//     );
// };

// module.exports.removeTermo = function(req, res) {
//     var id = req.params.id;
//     var caminho = '/api/termos/' + id;
//     var opcoesRequisicao = {
//         url: opcoesApi.servidor + caminho,
//         method: 'DELETE',
//         json: {}
//     };
//     request(
//         opcoesRequisicao,
//         function(erro, resposta, body) {
//             var mensagem = 'Termo removido com sucesso!',
//                 sucesso = true;
//             console.log('Status: ' + resposta.statusCode);
//             if (resposta.statusCode === 500 || erro) {
//                 mensagem = 'Ocorreu um erro ao tentar remover o termo';
//                 sucesso = false;
//             }
//             res.redirect('/');
//         }
//     );
// }

// module.exports.atualiza = function(req, res) {
//     var id = req.params.id;
//     var termo = req.body;
//     console.log(req.body);
//     var caminho = '/api/termos/atualiza/' + id;
//     termo.multimidia = JSON.parse(termo.multimidia);
//     var opcoesRequisicao = {
//         url: opcoesApi.servidor + caminho,
//         method: 'POST',
//         json: {
//             termo: termo
//         }
//     };
//     request(
//         opcoesRequisicao,
//         function(erro, resposta, body) {
//             var mensagem = 'Termo atualizado com sucesso!',
//                 sucesso = true;
//             console.log('Status: ' + resposta.statusCode);
//             if (resposta.statusCode === 500 || erro) {
//                 mensagem = 'Ocorreu um erro ao tentar atualizar o termo';
//                 sucesso = false;
//             }
//             res.render('termo', {
//                 titulo: 'Novo termo',
//                 mensagem: mensagem,
//                 sucesso: sucesso
//             });
//         }
//     );
// }

// module.exports.buscaPorId = function(req, res) {
//     var id = req.params.id;
//     var caminho = '/api/termos/' + id;
//     var opcoesRequisicao = {
//         url: opcoesApi.servidor + caminho,
//         method: 'GET',
//         json: {}
//     };
//     request(
//         opcoesRequisicao,
//         function(erro, resposta, termo) {
//             var mensagem = '',
//                 sucesso = true;
//             console.log('Status: ' + resposta.statusCode);
//             if (resposta.statusCode === 500 || erro) {
//                 mensagem = 'Ocorreu um erro ao tentar recuperar o termo';
//                 sucesso = false;
//             }
//             res.render('termo', {
//                 titulo: 'Atualiza termo',
//                 termo: termo,
//                 sucesso: sucesso
//             });
//         }
//     );
// }
// module.exports.getPaginaCallback = function(req, res) {
//     console.log('buscando callback');
//     res.render('callback', {});
// }
// module.exports.buscaTermoPortugues = function(req, res) {
//     console.log(req.params)
//     var caminho = '/api/termos/termoSolicitado/' + encodeURI(req.params.termoSolicitado);
//     var opcoesRequisicao = {
//         url: opcoesApi.servidor + caminho,
//         method: 'GET',
//         json: {}
//     }
//     request(opcoesRequisicao, function(erro, resposta, termos) {
//         var mensagem;
//         if (!(termos instanceof Array)) {
//             mensagem = "Erro ao tentar recuperar os termos";
//             resposta = [];
//         } else if (!termos.length) {
//             mensagem = "Termo não cadastrado";
//         } else {
//             mensagem = termos.length + ' termos cadastrados';
//         }

//         res.render('index', {
//             termos: termos,
//             mensagem: mensagem,
//             menu: true
//         });
//     });
// }


var request = require('request');

var opcoesApi = {
    servidor: "http://localhost:3000"
};

var carregaTermos = function(req, res, termos, token) {
    var mensagem;
    if (termos) {
        if (!(termos instanceof Array)) {
            mensagem = "Erro ao tentar recuperar os termos";
            resposta = [];
        } else if (!termos.length) {
            mensagem = "Nenhum termo cadastrado";
        } else {
            mensagem = termos.length + ' termos cadastrados';
        }
    }
    res.render('index', {
        token: token,
        termos: termos,
        mensagem: mensagem
    });
};


var renderizaPaginaInicial = function(req, res) {
    res.render('index', {});
}

module.exports.carregaFormularioLogin = function(req, res) {
    renderizaLogin(req, res)
}

var renderizaLogin = function(req, res) {
    res.render('usuario', {
        titulo: 'LOGIN'
    });
}

module.exports.login = function(req, res) {
    var caminho = '/api/login';
    var opcoesRequisicao = {
        url: opcoesApi.servidor + caminho,
        method: 'POST',
        json: { email: req.body.email, password: req.body.password }
    }
    request(
        opcoesRequisicao,
        function(erro, resposta, token) {
            if (token.message) {
                res.render('usuario', {
                    mensagem: token.message,
                });
            } else {
                carregaTermos(req, res, null, token)
            }
        }
    )
}

module.exports.carregaPaginaInicial = function(req, res) {
    var caminho = '/api/termos';
    var token = req.params.token
    if (!token) {
        renderizaLogin(req, res)
    } else {
        renderizaPaginaInicial(req, res)
    }
};

module.exports.carregaFormularioNovoTermo = function(req, res) {
    res.render('termo', {
        titulo: 'Novo termo'
    });
};

module.exports.salvaNovoTermo = function(req, res) {
    var token = req.body.token
    var caminho = '/api/termos/';
    var termo = {
        emTerena: req.body.emTerena,
        emPortugues: req.body.emPortugues,
        aplicacaoFrase: req.body.aplicacaoFrase,
        significadoAplicacaoFrase: req.body.significadoAplicacaoFrase,
        categoria: req.body.categoria
    }
    termo.multimidia = JSON.parse(req.body.multimidia);
    var opcoesRequisicao = {
        method: 'POST',
        url: opcoesApi.servidor + caminho,
        headers: {
            authorization: "Bearer " + token
        },
        json: {
            termo: termo
        }
    };
    request(
        opcoesRequisicao,
        function(erro, resposta, body) {
            var mensagem = 'Termo salvo com sucesso!',
                sucesso = true;
            if (resposta.statusCode === 500 || erro) {
                mensagem = 'Ocorreu um erro ao tentar salvar o termo';
                sucesso = false;
            }
            if (resposta.statusCode === 401) {
                mensagem = 'Ação não autorizada'
                sucesso = false
            }
            res.render('termo', {
                titulo: 'Novo termo',
                mensagem: mensagem,
                sucesso: sucesso
            });
        }
    );
};

module.exports.removeTermo = function(req, res) {
    var id = req.params.id;
    var caminho = '/api/termos/' + id;
    var opcoesRequisicao = {
        url: opcoesApi.servidor + caminho,
        method: 'DELETE',
        json: {}
    };
    request(
        opcoesRequisicao,
        function(erro, resposta, body) {
            var mensagem = 'Termo removido com sucesso!',
                sucesso = true;
            console.log('Status: ' + resposta.statusCode);
            if (resposta.statusCode === 500 || erro) {
                mensagem = 'Ocorreu um erro ao tentar remover o termo';
                sucesso = false;
            }
            res.redirect('/');
        }
    );
}

module.exports.atualiza = function(req, res) {
    console.log('atualiza')
    var id = req.params.id;
    var termo = req.body;
    var caminho = '/api/termos/atualiza/' + id;
    termo.multimidia = JSON.parse(termo.multimidia);
    var opcoesRequisicao = {
        url: opcoesApi.servidor + caminho,
        method: 'POST',
        json: {
            termo: termo
        }
    };
    request(
        opcoesRequisicao,
        function(erro, resposta, body) {
            var mensagem = 'Termo atualizado com sucesso!',
                sucesso = true;
            console.log('Status: ' + resposta.statusCode);
            if (resposta.statusCode === 500 || erro) {
                mensagem = 'Ocorreu um erro ao tentar atualizar o termo';
                sucesso = false;
            }
            res.render('termo', {
                titulo: 'Novo termo',
                mensagem: mensagem,
                sucesso: sucesso
            });
        }
    );
}

module.exports.buscaPorId = function(req, res) {
    var id = req.params.id;
    var token = req.params.token
    var caminho = '/api/termos/' + id;
    var opcoesRequisicao = {
        url: opcoesApi.servidor + caminho,
        method: 'GET',
        headers: {
            authorization: "Bearer " + token
        },
        json: {}
    };
    request(
        opcoesRequisicao,
        function(erro, resposta, termo) {
            var mensagem = '',
                sucesso = true;
            console.log('Status: ' + resposta.statusCode);
            if (resposta.statusCode === 500 || erro) {
                mensagem = 'Ocorreu um erro ao tentar recuperar o termo';
                sucesso = false;
            }
            res.render('termo', {
                titulo: 'Atualiza termo',
                termo: termo,
                sucesso: sucesso
            });
        }
    );
}
module.exports.getPaginaCallback = function(req, res) {
        console.log('buscando callback');
        res.render('callback', {});
    }
    // module.exports.buscaTermoPortugues = function(req, res) {
    //     var token = req.query.token
    //     if (!token) {
    //         renderizaLogin(req, res)
    //     }
    //     var caminho = '/api/termos/termoSolicitado/' + encodeURI(req.query.pesquisa)
    //     var opcoesRequisicao = {
    //         method: 'GET',
    //         url: opcoesApi.servidor + caminho,
    //         headers: {
    //             authorization: "Bearer " + token
    //         },
    //         json: {}
    //     }
    //     request(opcoesRequisicao, function(erro, resposta, termos) {
    //         var mensagem
    //         if (!(termos instanceof Array)) {
    //             mensagem = "Erro ao tentar recuperar os termos";
    //             resposta = [];
    //         } else if (!termos.length) {
    //             mensagem = "Nenhum termo cadastrado";
    //         } else {
    //             mensagem = termos.length + ' termos cadastrados';
    //         }

//         res.render('index', {
//             termos: termos,
//             mensagem: mensagem
//         });
//     });
// }
module.exports.buscaTermoPortugues = function(req, res) {
    console.log(req.params)
    var caminho = '/api/termos/termoSolicitado/' + encodeURI(req.params.termoSolicitado);
    var opcoesRequisicao = {
        url: opcoesApi.servidor + caminho,
        method: 'GET',
        json: {}
    }
    request(opcoesRequisicao, function(erro, resposta, termos) {
        var mensagem;
        if (!(termos instanceof Array)) {
            mensagem = "Erro ao tentar recuperar os termos";
            resposta = [];
        } else if (!termos.length) {
            mensagem = "Termo não cadastrado";
        } else {
            mensagem = termos.length + ' termos cadastrados';
        }

        res.render('index', {
            termos: termos,
            mensagem: mensagem,
            menu: true
        });
    });
}