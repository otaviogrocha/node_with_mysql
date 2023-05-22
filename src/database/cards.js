const db = require("./db");
const helper = require("./helper");

async function find() {
  const query = `SELECT * FROM cards LIMIT 100`

  const rows = await db.query(query);
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function findOne(id) {
  const query = `SELECT * FROM cards WHERE id = ?`;
  const result = await db.query(query, [id]);

  const data = helper.emptyOrRows(result);

  return {
    data
  }
}

async function create( {name, type, desc, atk, def}) {
  const query = "INSERT INTO cards (`name`, `type`, `desc`, `atk`, `def`) values (?, ?, ?, ?, ?)";
  const result = await db.query(query, [name, type, desc, atk, def]);

  const message = result.affectedRows ? "Card criado com sucesso." : "Erro ao criar o card";

  return { message };
}

async function update(id, { name, type, desc, atk, def}) {
  const query = "UPDATE cards SET `name` = ?, `type` = ?, `desc` = ?, `atk` = ?, `def` = ? WHERE `id` = ?";
  const result = await db.query(query, [name, type, desc, atk, def, id])

  const message = result.affectedRows ? "Card atualizado com sucesso" : "Erro ao atualizar card";

  return { message };
}

async function remove(id) {
  const query = "DELETE FROM cards WHERE `id` = ?";
  const result = await db.query(query, [id]);

  const message = result.affectedRows ? "Card deletado com sucesso" : "Erro ao deletar card!";

  return { message };
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
};
