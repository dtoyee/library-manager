import mysql from "mysql2";

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    database: "library-manager",
  })
  .promise();

export async function findUserByUsername(field, table, value) {
  const [rows] = await connection.query(
    "SELECT * FROM " + table + " WHERE " + field + " = '" + value + "'"
  );
  return rows;
}

export function updatePassword(password, userId) {
  connection.query(
    "UPDATE users SET password = '" + password + "' WHERE id = '" + userId + "'"
  );
}

export function addBook(title, author, publish_year, isbn, slug) {
  connection.query(
    "INSERT INTO books (title, author, publish_year, isbn, slug) VALUES(?,?,?,?,?)",
    [title, author, publish_year, isbn, slug]
  );
}

export async function getAllBooks() {
  const [rows] = await connection.query("SELECT * FROM books ORDER BY id DESC")
  return rows
}

export function deleteBook(id) {
  connection.query("DELETE FROM books WHERE id = '"+ id +"'")
}