const express = require ("express");
const router = express.Router();
const { pedidoController } = require("../controllers/pedidoController");

/**
 * Define as rotas relacionadas aos pedidos
 * 
 * @module pedidoRoutes
 * 
 * @description
 * -Get /pedidos -> Lista todos os pedidos do banco de dados. 
 * -Post/ pedidos -> Cria um novo pedido e seus itens com os dados enviados pelo cliente Http
 */

router.get ("/pedidos", pedidoController.listarPedidos);
router.post ("/pedidos", pedidoController.criarPedido);

module.exports = {pedidoRoutes: router};