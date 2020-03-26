const express = require('express'); 
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma finromação no back-end
 * DELETE: Deletar uma informação no back-end
 */


 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na rotaapós "?" (Filtros, paginação) /users?page=2&nome=Denis
  * Route Params: Parâmetros utlizados para identificar recursos /users/1
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, POstgrSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */