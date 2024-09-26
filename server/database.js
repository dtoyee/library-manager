import mysql from "mysql2";

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    database: "library-manager",
  }).promise();

export async function findUserByUsername(field, table, value) {
  const [rows] = await connection.query("SELECT * FROM "+ table +" WHERE "+ field +" = '"+ value +"'")
  return rows;
}

export function updatePassword(password, userId) {
  connection.query("UPDATE users SET password = '" + password + "' WHERE id = '" + userId + "'")
}