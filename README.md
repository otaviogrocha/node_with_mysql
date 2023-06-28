# API em NODE.js e MySQL

Criação de uma API e suas rotas com o Node + requisição ao banco de dados MySQL utilizando as dependencias: cors, express, dotenv e mysql12.

Projeto separado entre as funcionalidades do app, controllers, credenciais de acesso, e do banco de dados.


### app
- Cria a porta que o servidor será hospedado e define as rotas do servidor utilizando o modulo {router} do 'express' para fazer os protocolos HTTP de acordos com os endpoints e os métodos da classe CardsController para cada requisição.
- Contém a classe "App" com um construtor para o servidor que define as rotas da API de acordo com as routes.js e habilita o CORS.

### config
- Contém as credenciais do banco de dados e utiliza do módulo dotenv para ocultar as credenciais no controle de versionamento.
### database
- Responsáveis por fazer a conexão com o banco de dados que recebe a consulta em SQL e/ou os parâmetros dessa consulta para retornar os resultados num array.
- Faz o tratamento de erro que verifica se o array é um falsy para retornar um array vazio e caso contrário retorna o valor original.
- Onde as querys são definidas para o controller, de acordo com os parâmetros das rotas.<br><br>

### controller
- Por fim, o CardsControllers.js: A classe que vai fazer a requisição e criar os métodos para a requisição de cada rota HTTP.<br>
- Nos métodos, o body da requisição é recuperado através da desestruturação para adicionar/modificar/remover algum atributo do card ou card em si.
- Nas funções de update(), delete() e show() o id é passado através do endpoint das rotas para ser recuperado através dos paramêtros da requisição e assim realizar a query com o valor definido na url.
  

## Projeto realizado durante a Oficina de desenvolvimento back-end com Node.js e MySQL da PUCMINAS
- Ministrada por @caiocampos-hotmart
- Realizada em 18/05/2023
