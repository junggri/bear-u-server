const mysql = require('mysql2');
const config = {
    host:"localhost",
    user:'root',
    password:'',
    database:''
}

const connection = mysql.createConnection(config);

connection.connect();

module.exports = connection
