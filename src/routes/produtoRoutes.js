const express = require("express");
const router = express.Router();
const{produtoController} = require("../controllers/produtoController");

//GET /produtos -> Lista todos os produtos
router.get("/produtos", produtoController.listarProdutos);

//POST /produtos -> Cria um novo porduto
router.post("/produtos", produtoController.criarProduto);

module.exports = {produtoRoutes: router};
