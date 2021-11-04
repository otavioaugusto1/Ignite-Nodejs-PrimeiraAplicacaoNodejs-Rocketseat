const express = require("express");
const { v4: uuidv4 } = require('uuid')

const app = express();
app.use(express.json())
const customers = [];

/** nosso tipo do cadastro
 * cpf - string
 * name - string
 * id - uuid identificador único universidade
 * statement - []
 * 
 */

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const id = uuidv4();

  customers.push({
    cpf,
    name,
    id,
    statement: []
  });
  return response.status(201).send();

})

app.listen(3333);