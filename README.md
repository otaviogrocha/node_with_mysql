# API em NODE.js e MySQL

Criação de uma API e seus endpoints com o Node com requisição ao banco de dados MySQL utilizando as dependencias: cors, express, dotenv e mysql12.

Projeto separado entre as funcionalidades do app, controllers, credenciais de acesso,e do banco de dados.


### app
- server.js: define a porta que será hospedada;
- routes.js: cria as rotas do servidor utilizando o modulo {router} do 'express' para fazer os protocolos HTTP de acordos com os endpoints e os métodos da classe CardsController para cada requisição.
- app.js: contém a classe "App" com um construtor para o servidor que define as rotas da API de acordo com as routes.js e habilita o CORS.

### config
- mysql.js: contém as credenciais do banco de dados. Utiliza o módulo dotenv para ocultar as credenciais no controle de versionamento.
### database
- helper.js: tratamento de erro que verifica e retorna um array vazio caso o valor for um falsy senão retorna o valor original.
- db.js: importa modulos do SQL responsáveis por fazer a consulta através da que recebe como parâmetro a consulta em SQL e/ou os parâmetros dessa consulta específica e conecta com o banco de dados retornando os resultados dessa consulta num array "results".
- cards.js: utiliza dos métodos "query" de db.js e a função auxiliar "emptyRows" do helper.js para executar as consultas para cada funcionalidade do método HTTP selecionado. Contendo as funções assíncronas:<br><br>
    - find(): define uma consulta para buscar todos os cards no database e faz a query com essa consulta, depois verifica e trata o resultado de cada linha e retorna o objeto "data".<br>
    - findOne(): recebe o id do card a ser buscado no parametro, define a consulta a ser feita com a condição e na query é passado o paramêtro da consulta [id].<br>
    - create(): recebe os parametros da consulta name, type, desc, atk, def. A consulta é realizada através do metodo query que recebe esses parametros e retorna uma mensagem de sucesso caso a query teve alguma linha afetada.<br>
    - update(): recebe o id, mais os parâmetros da consulta para esse id. Define a consulta e faz a query com os parametros da consulta e retorna uma mensagem de sucesso caso a query teve alguma linha afetada.<br>
    - remove(): recebe o id como o parâmetro, define a consulta SQL, faz a query de acordo com o [id] e retorna uma mensagem de sucesso caso a query teve alguma linha afetada.<br><br>

### controller
- Por fim, o CardsControllers.js: Que contém a classe CardsControllers e define os métodos assíncronos de requisição para cada funcionalidade HTTP:<br>
 ⚠️ Todos os métodos recebem o request e o response de cada requisição como parâmetro
    - show(): desestrutura o request.params.id na variavél id e através do try catch faz a consulta no banco de dados importando as funções do cards.js e retorna a response em formato JSON, caso contrário retorna o tratamento de erro.
    - list(): lista os cards através da função find() de cards e retorna em JSON.
    - create(): desestrutura os name, type, desc, atk, def do request body e cria o objeto card com esses atributos. Faz a consulta no banco de dados passando o card como paramêtro da função importada cards.create.
    - update(): desestrutura os parâmetros da consulta do body e do params do request e cria o objeto updateData passando os atributos e faz a conexão através do import de cards.update passando como paramêtro o id e o updatedData retornando o card atualizado em JSON.
    - delete(): desestrutura o id do request e faz a conexão com o import de cards.remove passando o id como parâmetro e retornando o card em JSON.




## Projeto realizado durante a Oficina de desenvolvimento back-end com Node.js e MySQL da PUCMINAS
- Ministrada por @caiocampos-hotmart
- Realizada em 18/05/2023
