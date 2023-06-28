# API em NODE.js e MySQL

Criação de uma API e seus endpoints com o Node com requisição ao banco de dados MySQL utilizando as dependencias: cors, express, dotenv e mysql12.

Projeto separado entre as funcionalidades do app, controllers, credenciais de acesso,e do banco de dados.


### app
- Cria a porta que o servidor será hospedado e define as rotas do servidor utilizando o modulo {router} do 'express' para fazer os protocolos HTTP de acordos com os endpoints e os métodos da classe CardsController para cada requisição.
- Contém a classe "App" com um construtor para o servidor que define as rotas da API de acordo com as routes.js e habilita o CORS.

### config
- Contém as credenciais do banco de dados e utiliza do módulo dotenv para ocultar as credenciais no controle de versionamento.
### database
- Responsáveis por fazer a conexão com o banco de dados que recebe a consulta em SQL e/ou os parâmetros dessa consulta para retornar os resultados num array.
- cards.js: faz a query estabelecida em db.js para cada verbo HTTP e sua rota. Contendo as funções assíncronas:<br><br>
- helper.js: tratamento de erro que verifica e retorna um array vazio caso for um falsy senão retorna o valor original.

    - findOne(): recebe o id do card a ser buscado no parametro, define a consulta a ser feita com a condição e na query é passado o paramêtro da consulta [id].<br>
    - create(): recebe os parametros da consulta name, type, desc, atk, def. A consulta é realizada através do metodo query que recebe esses parametros e retorna uma mensagem de sucesso caso a query teve alguma linha afetada.<br>
    - update(): recebe o id, mais os parâmetros da consulta para esse id. Define a consulta e faz a query com os parametros da consulta e retorna uma mensagem de sucesso caso a query teve alguma linha afetada.<br>
    - remove(): recebe o id como o parâmetro, define a consulta SQL, faz a query de acordo com o [id] e retorna uma mensagem de sucesso caso a query teve alguma linha afetada.<br><br>

### controller
- Por fim, o CardsControllers.js: A classe que vai fazer a requisição e definir os métodos de requisição para cada rota HTTP.<br>
- Nos métodos de requisição o seu body é recuperado através da desestruturação para adicionar/modificar/remover algum atributo do card ou card em si.
- Nas funções de update(), delete() e show() o id é passado através do endpoint das rotas para ser recuperado através dos paramêtros da requisição e assim realizar a query com o valor definido na url.
  

## Projeto realizado durante a Oficina de desenvolvimento back-end com Node.js e MySQL da PUCMINAS
- Ministrada por @caiocampos-hotmart
- Realizada em 18/05/2023
