const {sql, getConnection} = require("../config/db");

const produtoModel = {
    buscarTodos: async () =>{
        try {
            
            const pool = await getConnection(); //Cria conexão com o BD

            let sql = 'SELECT * FROM Produtos';

            const result = await pool.request().query(sql);

            return result.recordset;


        } catch (error) {
            console.log('Erro: ao buscar produtos:',error);xzz
            throw error; //
        }
    }
}

module.exports = {produtoModel}