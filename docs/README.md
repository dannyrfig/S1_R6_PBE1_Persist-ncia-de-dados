## API Reference 

### Produtos

#### GET /clientes
- **Descrição**: Obtém uma lista de clientes
- **Response**: Array de clientes

#### POST /produtos
- **Descrição**: Cria um novo cliente
- **Body**: 
```
{
    "nomeCliente":"clienteExemplo",
    "cpfCliente":000.000.000-00
}
```
- **Response**: 
```
{
    "message": "Cliente cadastrado com sucesso !"
}
```