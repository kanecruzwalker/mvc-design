const connection = require("../config/connection.js");

const orm = {
    all: (table, callback) => {
        const queryString = "SELECT * FROM ??";
        
        connection.query(queryString, [table], (err, data) => {
            if (err) {
                throw err;
            }
            callback(data);
        });
    },
    create: (table, newRowData, cb) => {
        const queryString= "INSERT INTO ?? SET ?";
        const values = [table, newRowData];

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    update: (table, updateValues, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        const values = [table, updateValues, condition];

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;

