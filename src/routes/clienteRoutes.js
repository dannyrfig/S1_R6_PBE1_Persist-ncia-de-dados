const express = require("express");
const router = express.Router();
const{clienteController} = require("../controllers/clienteController");

//GET /produtos -> Lista todos os produtos
router.get("/clientes", clienteController.listarClientes);
//POST /clientes -> Cria um novo porduto
router.post("/clientes", clienteController.criarCliente);

module.exports = {clienteRoutes: router};
