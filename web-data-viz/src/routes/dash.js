var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/totalComparacoes/:idUsuario", function (req, res) {
    dashController.totalComparacoes(req, res);
});

router.get("/lutadorFavorito/:idUsuario", function (req, res) {
    dashController.lutadorFavorito(req, res);
});

router.get("/lutadorMaisVencedor/:idUsuario", function (req, res) {
    dashController.lutadorMaisVencedor(req, res);
});

router.get("/grafico/:idUsuario", function (req, res) {
    dashController.grafico(req, res);
});

module.exports = router;