const mysql = require("mysql2/promise");
const config = require("../config/mysql");

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);

  const [ results ] = await connection.execute(sql, params, (err) => {
    console.log(err);
  })

  return results;
}

module.exports = {
  query,
};ad
