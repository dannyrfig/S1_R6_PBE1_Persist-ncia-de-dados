const {clienteModel} = require("../models/clienteModel");
 
const clienteController = {
    //---------------------------
    //LISTAR TODOS OS CLIENTES
    //GET /clientes
    //---------------------------

    listarClientes: async (req,res)=> {
        try {
            const cliente = await clienteModel.buscarTodos();

            res.status(200).json(cliente);
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            res.status(500).json({message: 'Erro ao buscar clientes.'});
        }
    },
    criarCliente: async (req,res)=>{
        try {
            
            const {nomeCliente, cpfCliente} = req.body;

            if(nomeCliente == undefined || cpfCliente == undefined){
                return res.status(400).json({erro: 'Campos obrigatórios não preenchidos!'});
            }

            const result = await clienteModel.buscarCpf (cpfCliente);

            console.log(result)

            if (result.length > 0){
                return res.status(409).json({erro: 'Cpf já cadastrado'})
            }
            await clienteModel.inserirCliente(nomeCliente, cpfCliente);

            res.status(201).json({message: 'Cliente cadastrado com sucesso!'});

        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            res.status(500).json({erro:'Erro no servidor ao cadastrar cliente!'});
        }
    }
}


module.exports = {clienteController};