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
    
     //---------------------------
    //CRIAR UM NOVO CLIENTE
    //POST /clientes
    //---------------------------
    /*
    {
        "nomeCliente":"",
        "cpfCliente": 000.000.000-00
    */
    criarCliente: async (req,res)=>{ 
        try {
            
            const {nomeCliente, cpfCliente} = req.body;

            if(nomeCliente == undefined || cpfCliente == undefined){ //Verifica se o nome e o cpf do cliente já foi inserido
                return res.status(400).json({erro: 'Campos obrigatórios não preenchidos!'});
            }

            const result = await clienteModel.buscarCpf (cpfCliente); 

            console.log(result)

            if (result.length > 0){ //Verifica se o cpf inserido já foi cadastrado
                return res.status(409).json({erro: 'Cpf já cadastrado'}) // Caso seja maior que 0, é identificado o erro
            }
            await clienteModel.inserirCliente(nomeCliente, cpfCliente);

            res.status(201).json({message: 'Cliente cadastrado com sucesso!'});// Se o usuário informar todos os dados corretamente, retorna

        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            res.status(500).json({erro:'Erro no servidor ao cadastrar cliente!'});
        }
    }
}


module.exports = {clienteController};