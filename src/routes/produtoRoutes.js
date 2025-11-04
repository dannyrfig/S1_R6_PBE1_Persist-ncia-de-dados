const express = require("express");
const router = express.Router();
const{produtoController} = require("../controllers/produtoController");

//GET /produtos -> Lista todos os produtos
router.get("/produto", produtoController.listarProdutos);

//POST /produtos -> Cria um novo porduto
router.post("/produto", produtoController.criarProduto);

//PUT/produtos/idProduto -> Atualizar um produto
router.put("/produto/:idProduto", produtoController.atualizarProduto);

//DELETE/produtos/idProdutos -> deletar um produto
router.delete("/produto/:idProduto", produtoController.deletarProduto);
module.exports = {produtoRoutes: router};
