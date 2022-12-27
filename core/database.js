const mysql = require("mysql2");
const config = {
  host: "localhost",
  user: "root",
  password: "wowwjd123",
  database: "note",
};

const connection = mysql.createConnection(config);

connection.connect();

module.exports = connection;
