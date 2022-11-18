import mysql from "mysql2";

const PORT=3000;

const connectionData = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "xa_char_sheet"
}

const db = mysql.createConnection(connectionData);

export {PORT, db, connectionData};