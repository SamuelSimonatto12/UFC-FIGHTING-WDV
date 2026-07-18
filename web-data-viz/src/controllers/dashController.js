var dashModel = require("../models/dashModel");

function totalComparacoes(req, res) {
    var idUsuario = req.params.idUsuario;

    dashModel.totalComparacoes(idUsuario)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

function lutadorFavorito(req, res) {
    var idUsuario = req.params.idUsuario;

    dashModel.lutadorFavorito(idUsuario)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

function lutadorMaisVencedor(req, res) {
    var idUsuario = req.params.idUsuario;

    dashModel.lutadorMaisVencedor(idUsuario)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

function grafico(req, res) {
    var idUsuario = req.params.idUsuario;

    dashModel.grafico(idUsuario)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    totalComparacoes,
    lutadorFavorito,
    lutadorMaisVencedor,
    grafico
};