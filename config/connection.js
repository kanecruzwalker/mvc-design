const mysql = require("mysql");
const connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} ELSE {
    connection = mysql.createConnection ({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};

connection.connect();
module.exports = connection;